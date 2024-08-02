const EmailModel = require('../models/emailModel');
const EmailView = require('../views/emailView');
const ContactEmailModel = require('../models/contactEmailModel'); // Certifique-se de que está importando este módulo

class EmailControllerEN {
    static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static validateTemplateData(templateData) {
        if (templateData.phoneNumber && templateData.phoneNumber.length !== 9) {
            return { valid: false, message: 'Phone number must be 9 digits long.' };
        }
        if (templateData.clientNumber && isNaN(templateData.clientNumber)) {
            return { valid: false, message: 'Client number must be numeric.' };
        }
        return { valid: true };
    }

    static async sendReturnEmailEN(req, res) {
        const { to, subject, templateData } = req.body;
        const cc = process.env.EMAIL_CC;
        if (!to) {
            return res.status(400).send('Error: Recipient email address is required.');
        }
        if (!EmailControllerEN.validateEmail(to)) {
            return res.status(400).send('Error: Recipient email address is invalid.');
        }
        if (cc && !EmailControllerEN.validateEmail(cc)) {
            return res.status(400).send('Error: CC email address is invalid.');
        }
        if (!subject) {
            return res.status(400).send('Error: Email subject is required.');
        }
        if (!templateData) {
            return res.status(400).send('Error: Template data is required.');
        }
        const templateValidation = EmailControllerEN.validateTemplateData(templateData);
        if (!templateValidation.valid) {
            return res.status(400).send('Error: ' + templateValidation.message);
        }

        const clientTemplateName = 'confirmationEN.html';
        const adminTemplateName = 'returnEN.html';

        let clientEmailHtml, adminEmailHtml;

        try {
            clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Error fetching client template: ${error.message}`);
        }

        try {
            adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Error fetching admin template: ${error.message}`);
        }

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'New return form submitted',
            adminEmailHtml,
            cc
        );

        try {
            await emailUser.sendEmail(); // Sends email to the user
            await emailAdmin.sendEmail(); // Sends email to the administrator with CC

            res.status(200).send('Emails sent successfully');
        } catch (error) {
            res.status(500).send('Error sending emails: ' + error.message);
        }
    }

    static async sendWarrantyEmailEN(req, res) {
        const { to, subject, templateData } = req.body;
        const cc = process.env.EMAIL_CC;
        if (!to) {
            return res.status(400).send('Error: Recipient email address is required.');
        }
        if (!EmailControllerEN.validateEmail(to)) {
            return res.status(400).send('Error: Recipient email address is invalid.');
        }
        if (cc && !EmailControllerEN.validateEmail(cc)) {
            return res.status(400).send('Error: CC email address is invalid.');
        }
        if (!subject) {
            return res.status(400).send('Error: Email subject is required.');
        }
        if (!templateData) {
            return res.status(400).send('Error: Template data is required.');
        }
        const templateValidation = EmailControllerEN.validateTemplateData(templateData);
        if (!templateValidation.valid) {
            return res.status(400).send('Error: ' + templateValidation.message);
        }

        const clientTemplateName = 'confirmationEN.html';
        const adminTemplateName = 'warrantyEN.html';

        let clientEmailHtml, adminEmailHtml;

        try {
            clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Error fetching client template: ${error.message}`);
        }

        try {
            adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Error fetching admin template: ${error.message}`);
        }

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'New warranty form submitted',
            adminEmailHtml,
            cc
        );

        try {
            await emailUser.sendEmail(); // Sends email to the user
            await emailAdmin.sendEmail(); // Sends email to the administrator with CC

            res.status(200).send('Emails sent successfully');
        } catch (error) {
            res.status(500).send('Error sending emails: ' + error.message);
        }
    }

    static async sendRepairEmailEN(req, res) {
        const { to, subject, templateData } = req.body;
        const cc = process.env.EMAIL_CC;
        if (!to) {
            return res.status(400).send('Error: Recipient email address is required.');
        }
        if (!EmailControllerEN.validateEmail(to)) {
            return res.status(400).send('Error: Recipient email address is invalid.');
        }
        if (cc && !EmailControllerEN.validateEmail(cc)) {
            return res.status(400).send('Error: CC email address is invalid.');
        }
        if (!subject) {
            return res.status(400).send('Error: Email subject is required.');
        }
        if (!templateData) {
            return res.status(400).send('Error: Template data is required.');
        }
        const templateValidation = EmailControllerEN.validateTemplateData(templateData);
        if (!templateValidation.valid) {
            return res.status(400).send('Error: ' + templateValidation.message);
        }

        const clientTemplateName = 'confirmationEN.html';
        const adminTemplateName = 'repairEN.html';

        let clientEmailHtml, adminEmailHtml;

        try {
            clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Error fetching client template: ${error.message}`);
        }

        try {
            adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Error fetching admin template: ${error.message}`);
        }

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'New repair form submitted',
            adminEmailHtml,
            cc
        );

        try {
            await emailUser.sendEmail(); // Sends email to the user
            await emailAdmin.sendEmail(); // Sends email to the administrator with CC

            res.status(200).send('Emails sent successfully');
        } catch (error) {
            res.status(500).send('Error sending emails: ' + error.message);
        }
    }


    static async sendQuestionsEmailEN(req, res) {
        const { to, subject, templateData } = req.body;
        const cc = process.env.EMAIL_CC;
        if (!to) {
            return res.status(400).send('Error: Recipient email address is required.');
        }
        if (!EmailControllerEN.validateEmail(to)) {
            return res.status(400).send('Error: Recipient email address is invalid.');
        }
        if (cc && !EmailControllerEN.validateEmail(cc)) {
            return res.status(400).send('Error: CC email address is invalid.');
        }
        if (!subject) {
            return res.status(400).send('Error: Email subject is required.');
        }
        if (!templateData) {
            return res.status(400).send('Error: Template data is required.');
        }
        const templateValidation = EmailControllerEN.validateTemplateData(templateData);
        if (!templateValidation.valid) {
            return res.status(400).send('Error: ' + templateValidation.message);
        }

        const clientTemplateName = 'confirmationEN.html';
        const adminTemplateName = 'questionsEN.html';

        let clientEmailHtml, adminEmailHtml;

        try {
            clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Error fetching client template: ${error.message}`);
        }

        try {
            adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Error fetching admin template: ${error.message}`);
        }

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'New contact form submitted',
            adminEmailHtml,
            cc
        );

        try {
            await emailUser.sendEmail(); // Sends email to the user
            await emailAdmin.sendEmail(); // Sends email to the administrator with CC

            res.status(200).send('Emails sent successfully');
        } catch (error) {
            res.status(500).send('Error sending emails: ' + error.message);
        }
    }

    static async sendOptionBasedEmailEN(req, res) {
        const { to, subject, templateData, contactOption } = req.body;
        const cc = process.env.EMAIL_CC;
        if (!to) {
            return res.status(400).send('Error: Recipient email address is required.');
        }
        if (!EmailControllerEN.validateEmail(to)) {
            return res.status(400).send('Error: Invalid recipient email address.');
        }
        if (cc && !EmailControllerEN.validateEmail(cc)) {
            return res.status(400).send('Error: Invalid CC email address.');
        }
        if (!subject) {
            return res.status(400).send('Error: Email subject is required.');
        }
        if (!templateData) {
            return res.status(400).send('Error: Template data is required.');
        }
        if (!contactOption) {
            return res.status(400).send('Error: Contact option is required.');
        }

        let contactEmail;

        try {
            contactEmail = await ContactEmailModel.getEmailByContactOption(contactOption);
            if (!contactEmail) {
                return res.status(400).send('Error: Invalid contact option.');
            }
        } catch (error) {
            return res.status(500).send(`Error fetching contact email: ${error.message}`);
        }

        const clientTemplateName = 'confirmationEN.html';
        const adminTemplateName = 'generalEN.html';

        let clientEmailHtml, adminEmailHtml;

        try {
            clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Error getting client template: ${error.message}`);
        }

        try {
            adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Error getting admin template: ${error.message}`);
        }

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            contactEmail,
            'New contact form submitted',
            adminEmailHtml,
            cc
        );

        try {
            await emailUser.sendEmail(); // Send email to the user
            await emailAdmin.sendEmail(); // Send email to the admin with CC

            res.status(200).send('Emails sent successfully');
        } catch (error) {
            res.status(500).send('Error sending emails: ' + error.message);
        }
    }

}

module.exports = EmailControllerEN;
