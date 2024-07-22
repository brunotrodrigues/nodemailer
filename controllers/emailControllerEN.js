const EmailModel = require('../models/emailModel');
const EmailView = require('../views/emailView');

class EmailControllerEN {
    static async sendReturnEmailEN(req, res) {
        const { to, subject, templateData } = req.body;
        const clientTemplateName = 'confirmationEN.html';
        const clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);

        const adminTemplateName = 'admin_template_returnEN.html';
        const adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'New return form submitted',
            adminEmailHtml
        );

        try {
            await emailUser.sendEmail(); // Sends email to the user
            await emailAdmin.sendEmailAdmin(); // Sends email to the administrator

            res.status(200).send('Emails sent successfully');
        } catch (error) {
            res.status(500).send('Error sending emails: ' + error.message);
        }
    }

    static async sendWarrantyEmailEN(req, res) {
        const { to, subject, templateData } = req.body;
        const clientTemplateName = 'client_confirmation_template.html';
        const clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);

        const adminTemplateName = 'admin_template_warranty.html';
        const adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'New warranty form submitted',
            adminEmailHtml
        );

        try {
            await emailUser.sendEmail(); // Sends email to the user
            await emailAdmin.sendEmailAdmin(); // Sends email to the administrator

            res.status(200).send('Emails sent successfully');
        } catch (error) {
            res.status(500).send('Error sending emails: ' + error.message);
        }
    }

    static async sendRepairEmailEN(req, res) {
        const { to, subject, templateData } = req.body;
        const clientTemplateName = 'client_confirmation_template.html';
        const clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);

        const adminTemplateName = 'admin_template_repair.html';
        const adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'New repair form submitted',
            adminEmailHtml
        );

        try {
            await emailUser.sendEmail(); // Sends email to the user
            await emailAdmin.sendEmailAdmin(); // Sends email to the administrator

            res.status(200).send('Emails sent successfully');
        } catch (error) {
            res.status(500).send('Error sending emails: ' + error.message);
        }
    }

    static async sendGeneralEmailEN(req, res) {
        const { to, subject, templateData } = req.body;
        const clientTemplateName = 'client_confirmation_template.html'; // General email template name
        const clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);

        const adminTemplateName = 'admin_template.html';
        const adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'New contact form submitted',
            adminEmailHtml
        );

        try {
            await emailUser.sendEmail(); // Sends email to the user
            await emailAdmin.sendEmailAdmin(); // Sends email to the administrator

            res.status(200).send('Emails sent successfully');
        } catch (error) {
            res.status(500).send('Error sending emails: ' + error.message);
        }
    }

    static async sendQuestionsEmailEN(req, res) {
        const { to, subject, templateData } = req.body;
        const clientTemplateName = 'client_confirmation_template.html'; // General email template name
        const clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);

        const adminTemplateName = 'admin_template_questions.html';
        const adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'New contact form submitted',
            adminEmailHtml
        );

        try {
            await emailUser.sendEmail(); // Sends email to the user
            await emailAdmin.sendEmailAdmin(); // Sends email to the administrator

            res.status(200).send('Emails sent successfully');
        } catch (error) {
            res.status(500).send('Error sending emails: ' + error.message);
        }
    }
}

module.exports = EmailControllerEN;
