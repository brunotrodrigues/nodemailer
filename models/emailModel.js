const nodemailer = require('nodemailer');

class EmailModel {
    constructor(to, subject, html, cc = null) {
        this.to = to;
        this.subject = subject;
        this.html = html;
        this.cc = cc;
    }

    static createTransporter() {
        return nodemailer.createTransport({
            host: process.env.SMTP_SERVER,
            port: process.env.SMTP_PORT,
            secure: true, // true for 465, false for other ports
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
            html: this.html,
        };

        if (this.cc) {
            mailOptions.cc = this.cc;
        }

        return transporter.sendMail(mailOptions);
    }

    sendEmailAdmin() {
        const transporter = EmailModel.createTransporter();
        const mailOptions = {
            from: process.env.SMTP_USERNAME,
            to: process.env.ADMIN_EMAIL,
            subject: this.subject,
            html: this.html,
            cc: this.cc
        };

        return transporter.sendMail(mailOptions);
    }
}

module.exports = EmailModel;
