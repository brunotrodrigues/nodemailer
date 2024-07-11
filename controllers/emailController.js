const EmailModel = require('../models/emailModel');
const EmailView = require('../views/emailView');

class EmailController {
    static async sendEmail(req, res) {
        const { to, subject, text, templateName, templateData } = req.body;

        // Template de confirmação para o usuário
        let userEmailHtml = text;
        if (templateName) {
            userEmailHtml = EmailView.getTemplate(templateName, templateData);
        }

        // Template de informações do formulário para o administrador
        const adminTemplateName = 'admin_template.html';
        const adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);

        const emailUser = new EmailModel(to, subject, userEmailHtml);
        const emailAdmin = new EmailModel(
            'tiago.solinf@gmail.com',
            'Novo formulário submetido',
            adminEmailHtml
        );

        try {
            await emailUser.sendEmail();
            await emailAdmin.sendEmail();
            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }
}

module.exports = EmailController;
