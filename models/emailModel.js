const nodemailer = require('nodemailer');

class EmailModel {
    constructor(to, subject, html) {
        this.to = to;
        this.subject = subject;
        this.html = html;
    }

    static createTransporter() {
        return nodemailer.createTransport({
            host: process.env.SMTP_SERVER,
            port: process.env.SMTP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD
            }
        });
    }

    sendEmail() {
        const transporter = EmailModel.createTransporter();
        const mailOptions = {
            from: process.env.SMTP_USERNAME,
            to: this.to,
            subject: this.subject,
            html: this.html
        };

        return transporter.sendMail(mailOptions);
    }
    sendEmailAdmin() {
        const transporter = EmailModel.createTransporter();
        const mailOptions = {
            from: process.env.SMTP_USERNAME,
            to: process.env.ADMIN_EMAIL,
            subject: this.subject,
            html: this.html
        };

        return transporter.sendMail(mailOptions);
    }
}

module.exports = EmailModel;
