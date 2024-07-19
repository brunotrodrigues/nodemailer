const EmailModel = require('../models/emailModel');
const EmailView = require('../views/emailView');

class EmailController {
    static async sendDevolucaoEmail(req, res) {
        const { to, subject, templateData } = req.body;
        const clientTemplateName = 'client_confirmation_template.html';
        const clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);

        const adminTemplateName = 'admin_template_return.html';
        const adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'Novo formulário de devolução submetido',
            adminEmailHtml
        );

        try {
            await emailUser.sendEmail(); // Envia email para o usuário
            await emailAdmin.sendEmailAdmin(); // Envia email para o administrador

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }

    static async sendGarantiaEmail(req, res) {
        const { to, subject, templateData } = req.body;
        const clientTemplateName = 'client_confirmation_template.html';
        const clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);

        const adminTemplateName = 'admin_template_warranty.html';
        const adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'Novo formulário de garantia submetido',
            adminEmailHtml
        );

        try {
            await emailUser.sendEmail(); // Envia email para o usuário
            await emailAdmin.sendEmailAdmin(); // Envia email para o administrador

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }

    static async sendReparacaoEmail(req, res) {
        const { to, subject, templateData } = req.body;
        const clientTemplateName = 'client_confirmation_template.htm';
        const clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);

        const adminTemplateName = 'admin_template_reparacao.html';
        const adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'Novo formulário de reparação submetido',
            adminEmailHtml
        );

        try {
            await emailUser.sendEmail(); // Envia email para o usuário
            await emailAdmin.sendEmailAdmin(); // Envia email para o administrador

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }

    static async sendGeneralEmail(req, res) {
        const { to, subject, templateData } = req.body;
        const clientTemplateName = 'client_confirmation_template.html'; // Nome do template do email geral
        const clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);

        const adminTemplateName = 'admin_template.html';
        const adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'Novo formulário de contato submetido',
            adminEmailHtml
        );

        try {
            await emailUser.sendEmail(); // Envia email para o usuário
            await emailAdmin.sendEmailAdmin(); // Envia email para o administrador

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }

    static async sendQuestionsEmail(req, res) {
        const { to, subject, templateData } = req.body;
        const clientTemplateName = 'client_confirmation_template.html'; // Nome do template do email geral
        const clientEmailHtml = EmailView.getTemplate(clientTemplateName, templateData);

        const adminTemplateName = 'admin_template_questions.html';
        const adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);

        const emailUser = new EmailModel(to, subject, clientEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'Novo formulário de contato submetido',
            adminEmailHtml
        );

        try {
            await emailUser.sendEmail(); // Envia email para o usuário
            await emailAdmin.sendEmailAdmin(); // Envia email para o administrador

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }
}

module.exports = EmailController;
