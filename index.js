
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const { SMTP_SERVER, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD } = require('./config');

async function sendEmail(subject, toEmail, htmlContent) {
    let transporter = nodemailer.createTransport({
        host: SMTP_SERVER,
        port: SMTP_PORT,
        secure: false, 
        auth: {
            user: SMTP_USERNAME,
            pass: SMTP_PASSWORD
        }
    });

    let info = await transporter.sendMail({
        from: SMTP_USERNAME,
        to: toEmail,
        subject: subject,
        html: htmlContent
    });

    console.log('Message sent: %s', info.messageId);
}

if (require.main === module) {
    const subject = 'Email Test';
    const toEmail = 'tiago.a.marquez@gmail.com';
    const templatePath = path.join(__dirname, 'templates', 'sample_template.html');
    const htmlContent = fs.readFileSync(templatePath, 'utf8');

    sendEmail(subject, toEmail, htmlContent).catch(console.error);
}
