const EmailModel = require('../models/emailModel');
const EmailView = require('../views/emailView');

class EmailController {
    static async sendEmail(req, res) {
        const { to, subject, text, templateName, templateData } = req.body;

        let emailHtml = text;
        if (templateName) {
            emailHtml = EmailView.getTemplate(templateName, templateData);
        }

        const email = new EmailModel(to, subject, emailHtml);

        try {
            await email.sendEmail();
            res.status(200).send('Email sent successfully');
        } catch (error) {
            res.status(500).send('Error sending email: ' + error.message);
        }
    }
}

module.exports = EmailController;
