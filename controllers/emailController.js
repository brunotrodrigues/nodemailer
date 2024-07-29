const EmailModel = require('../models/emailModel');
const EmailView = require('../views/emailView');
const ContactEmailModel = require('../models/contactEmailModel'); // Modelo que mapeia as opções de contato para emails

class EmailController {
    static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static validateTemplateData(templateData) {
        if (templateData.phoneNumber && templateData.phoneNumber.length !== 9) {
            return { valid: false, message: 'O número de telefone deve ter 9 dígitos.' };
        }
        if (templateData.clientNumber && isNaN(templateData.clientNumber)) {
            return { valid: false, message: 'O número do cliente deve ser numérico.' };
        }
        return { valid: true };
    }

    static async sendDevolucaoEmail(req, res) {
        const { to, cc, subject, templateData } = req.body;

        if (!to) {
            return res.status(400).send('Erro: Endereço de email do destinatário é obrigatório.');
        }
        if (!EmailController.validateEmail(to)) {
            return res.status(400).send('Erro: Endereço de email do destinatário é inválido.');
        }
        if (cc && !EmailController.validateEmail(cc)) {
            return res.status(400).send('Erro: Endereço de email de CC é inválido.');
        }
        if (!subject) {
            return res.status(400).send('Erro: Assunto do email é obrigatório.');
        }
        if (!templateData) {
            return res.status(400).send('Erro: Dados do template são obrigatórios.');
        }
        const templateValidation = EmailController.validateTemplateData(templateData);
        if (!templateValidation.valid) {
            return res.status(400).send('Erro: ' + templateValidation.message);
        }

        const clientTemplateName = 'client_confirmation_template.html';
        const adminTemplateName = 'admin_template_return.html';

        let clientEmailHtml, adminEmailHtml;

        try {
            clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Erro ao obter o template do cliente: ${error.message}`);
        }

        try {
            adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Erro ao obter o template do admin: ${error.message}`);
        }

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'Novo formulário de devolução submetido',
            adminEmailHtml,
            cc
        );

        try {
            await emailUser.sendEmail(); // Envia email para o usuário
            await emailAdmin.sendEmail(); // Envia email para o administrador com CC

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }

    static async sendGarantiaEmail(req, res) {
        const { to, cc, subject, templateData } = req.body;

        if (!to) {
            return res.status(400).send('Erro: Endereço de email do destinatário é obrigatório.');
        }
        if (!EmailController.validateEmail(to)) {
            return res.status(400).send('Erro: Endereço de email do destinatário é inválido.');
        }
        if (cc && !EmailController.validateEmail(cc)) {
            return res.status(400).send('Erro: Endereço de email de CC é inválido.');
        }
        if (!subject) {
            return res.status(400).send('Erro: Assunto do email é obrigatório.');
        }
        if (!templateData) {
            return res.status(400).send('Erro: Dados do template são obrigatórios.');
        }
        const templateValidation = EmailController.validateTemplateData(templateData);
        if (!templateValidation.valid) {
            return res.status(400).send('Erro: ' + templateValidation.message);
        }

        const clientTemplateName = 'client_confirmation_template.html';
        const adminTemplateName = 'admin_template_warranty.html';

        let clientEmailHtml, adminEmailHtml;

        try {
            clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Erro ao obter o template do cliente: ${error.message}`);
        }

        try {
            adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Erro ao obter o template do admin: ${error.message}`);
        }

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'Novo formulário de garantia submetido',
            adminEmailHtml,
            cc
        );

        try {
            await emailUser.sendEmail(); // Envia email para o usuário
            await emailAdmin.sendEmail(); // Envia email para o administrador com CC

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }

    static async sendReparacaoEmail(req, res) {
        const { to, cc, subject, templateData } = req.body;

        if (!to) {
            return res.status(400).send('Erro: Endereço de email do destinatário é obrigatório.');
        }
        if (!EmailController.validateEmail(to)) {
            return res.status(400).send('Erro: Endereço de email do destinatário é inválido.');
        }
        if (cc && !EmailController.validateEmail(cc)) {
            return res.status(400).send('Erro: Endereço de email de CC é inválido.');
        }
        if (!subject) {
            return res.status(400).send('Erro: Assunto do email é obrigatório.');
        }
        if (!templateData) {
            return res.status(400).send('Erro: Dados do template são obrigatórios.');
        }
        const templateValidation = EmailController.validateTemplateData(templateData);
        if (!templateValidation.valid) {
            return res.status(400).send('Erro: ' + templateValidation.message);
        }

        const clientTemplateName = 'client_confirmation_template.html';
        const adminTemplateName = 'repairPT.html';

        let clientEmailHtml, adminEmailHtml;

        try {
            clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Erro ao obter o template do cliente: ${error.message}`);
        }

        try {
            adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Erro ao obter o template do admin: ${error.message}`);
        }

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'Novo formulário de reparação submetido',
            adminEmailHtml,
            cc
        );

        try {
            await emailUser.sendEmail(); // Envia email para o usuário
            await emailAdmin.sendEmail(); // Envia email para o administrador com CC

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }

    static async sendGeneralEmail(req, res) {
        const { to, cc, subject, templateData } = req.body;

        if (!to) {
            return res.status(400).send('Erro: Endereço de email do destinatário é obrigatório.');
        }
        if (!EmailController.validateEmail(to)) {
            return res.status(400).send('Erro: Endereço de email do destinatário é inválido.');
        }
        if (cc && !EmailController.validateEmail(cc)) {
            return res.status(400).send('Erro: Endereço de email de CC é inválido.');
        }
        if (!subject) {
            return res.status(400).send('Erro: Assunto do email é obrigatório.');
        }
        if (!templateData) {
            return res.status(400).send('Erro: Dados do template são obrigatórios.');
        }
        const templateValidation = EmailController.validateTemplateData(templateData);
        if (!templateValidation.valid) {
            return res.status(400).send('Erro: ' + templateValidation.message);
        }

        const clientTemplateName = 'client_confirmation_template.html';
        const adminTemplateName = 'admin_template.html';

        let clientEmailHtml, adminEmailHtml;

        try {
            clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Erro ao obter o template do cliente: ${error.message}`);
        }

        try {
            adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Erro ao obter o template do admin: ${error.message}`);
        }

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'Novo formulário de contato submetido',
            adminEmailHtml,
            cc
        );

        try {
            await emailUser.sendEmail(); // Envia email para o usuário
            await emailAdmin.sendEmail(); // Envia email para o administrador com CC

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }

    static async sendQuestionsEmail(req, res) {
        const { to, cc, subject, templateData } = req.body;

        if (!to) {
            return res.status(400).send('Erro: Endereço de email do destinatário é obrigatório.');
        }
        if (!EmailController.validateEmail(to)) {
            return res.status(400).send('Erro: Endereço de email do destinatário é inválido.');
        }
        if (cc && !EmailController.validateEmail(cc)) {
            return res.status(400).send('Erro: Endereço de email de CC é inválido.');
        }
        if (!subject) {
            return res.status(400).send('Erro: Assunto do email é obrigatório.');
        }
        if (!templateData) {
            return res.status(400).send('Erro: Dados do template são obrigatórios.');
        }
        const templateValidation = EmailController.validateTemplateData(templateData);
        if (!templateValidation.valid) {
            return res.status(400).send('Erro: ' + templateValidation.message);
        }

        const clientTemplateName = 'client_confirmation_template.html';
        const adminTemplateName = 'admin_template_questions.html';

        let clientEmailHtml, adminEmailHtml;

        try {
            clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Erro ao obter o template do cliente: ${error.message}`);
        }

        try {
            adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Erro ao obter o template do admin: ${error.message}`);
        }

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'Novo formulário de contato submetido',
            adminEmailHtml,
            cc
        );

        try {
            await emailUser.sendEmail(); // Envia email para o usuário
            await emailAdmin.sendEmail(); // Envia email para o administrador com CC

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }

    static async sendOptionBasedEmail(req, res) {
        const { to, cc, subject, templateData, contactOption } = req.body;

        if (!to) {
            return res.status(400).send('Erro: Endereço de email do destinatário é obrigatório.');
        }
        if (!EmailController.validateEmail(to)) {
            return res.status(400).send('Erro: Endereço de email do destinatário é inválido.');
        }
        if (cc && !EmailController.validateEmail(cc)) {
            return res.status(400).send('Erro: Endereço de email de CC é inválido.');
        }
        if (!subject) {
            return res.status(400).send('Erro: Assunto do email é obrigatório.');
        }
        if (!templateData) {
            return res.status(400).send('Erro: Dados do template são obrigatórios.');
        }
        if (!contactOption) {
            return res.status(400).send('Erro: Opção de contato é obrigatória.');
        }

        let contactEmail;

        try {
            contactEmail = await ContactEmailModel.getEmailByContactOption(contactOption);
            if (!contactEmail) {
                return res.status(400).send('Erro: Opção de contato inválida.');
            }
        } catch (error) {
            return res.status(500).send(`Erro ao buscar o email de contato: ${error.message}`);
        }

        const clientTemplateName = 'client_confirmation_template.html';
        const adminTemplateName = 'admin_template.html';

        let clientEmailHtml, adminEmailHtml;

        try {
            clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Erro ao obter o template do cliente: ${error.message}`);
        }

        try {
            adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);
        } catch (error) {
            return res.status(500).send(`Erro ao obter o template do admin: ${error.message}`);
        }

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            contactEmail,
            'Novo formulário de contato submetido',
            adminEmailHtml,
            cc
        );

        try {
            await emailUser.sendEmail(); // Envia email para o usuário
            await emailAdmin.sendEmail(); // Envia email para o administrador com CC

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }
}

module.exports = EmailController;
