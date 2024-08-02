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
        const { to, subject, templateData } = req.body;
        const cc = process.env.EMAIL_CC;

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

        const clientTemplateName = 'confirmationPT.html';
        const adminTemplateName = 'returnPT.html';

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
            await emailUser.sendEmail(); 
            await emailAdmin.sendEmail(); 

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }

    static async sendGarantiaEmail(req, res) {
        const { to, subject, templateData } = req.body;
        const cc = process.env.EMAIL_CC; 

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

        const clientTemplateName = 'confirmationPT.html';
        const adminTemplateName = 'warrantyPT.html';

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
        const { to, subject, templateData } = req.body;
        const cc = process.env.EMAIL_CC; 

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

        const clientTemplateName = 'confirmationPT.html';
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

 

    static async sendQuestionsEmail(req, res) {
        const { to, subject, templateData } = req.body;
        const cc = process.env.EMAIL_CC; 

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

        const clientTemplateName = 'confirmationPT.html';
        const adminTemplateName = 'questionsPT.html';

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
            await emailUser.sendEmail(); 
            await emailAdmin.sendEmail(); 

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }

    static async sendOptionBasedEmail(req, res) {
        const { to, subject, templateData, contactOption } = req.body;
        const cc = process.env.EMAIL_CC;

        if (!to) {
            const error = 'Erro: Endereço de email do destinatário é obrigatório.';
            console.error(error);
            return res.status(400).send(error);
        }
        if (!EmailController.validateEmail(to)) {
            const error = 'Erro: Endereço de email do destinatário é inválido.';
            console.error(error);
            return res.status(400).send(error);
        }
        if (cc && !EmailController.validateEmail(cc)) {
            const error = 'Erro: Endereço de email de CC é inválido.';
            console.error(error);
            return res.status(400).send(error);
        }
        if (!subject) {
            const error = 'Erro: Assunto do email é obrigatório.';
            console.error(error);
            return res.status(400).send(error);
        }
        if (!templateData) {
            const error = 'Erro: Dados do template são obrigatórios.';
            console.error(error);
            return res.status(400).send(error);
        }
        if (!contactOption) {
            const error = 'Erro: Opção de contato é obrigatória.';
            console.error(error);
            return res.status(400).send(error);
        }

        let contactEmail;

        try {
            contactEmail = await ContactEmailModel.getEmailByContactOption(contactOption);
            if (!contactEmail) {
                const error = 'Erro: Opção de contato inválida.';
                console.error(error);
                return res.status(400).send(error);
            }
        } catch (error) {
            console.error(`Erro ao buscar o email de contato: ${error.message}`);
            return res.status(500).send(`Erro ao buscar o email de contato: ${error.message}`);
        }

        const clientTemplateName = 'confirmationPT.html';
        const adminTemplateName = 'generalPT.html';

        let clientEmailHtml, adminEmailHtml;

        try {
            clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);
        } catch (error) {
            console.error(`Erro ao obter o template do cliente: ${error.message}`);
            return res.status(500).send(`Erro ao obter o template do cliente: ${error.message}`);
        }

        try {
            adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);
        } catch (error) {
            console.error(`Erro ao obter o template do admin: ${error.message}`);
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
            await emailUser.sendEmail();
            await emailAdmin.sendEmail();

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            console.error('Erro ao enviar emails: ' + error.message);
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }

}

module.exports = EmailController;
