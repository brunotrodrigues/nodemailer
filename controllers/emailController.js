const EmailModel = require('../models/emailModel');
const EmailView = require('../views/emailView');
const db = require('../config/db'); 

class EmailController {
    static async sendEmail(req, res) {
        const { to, subject, text, templateName, templateData } = req.body;

        let userEmailHtml = text;
        if (templateName) {
            userEmailHtml = EmailView.getTemplate(templateName, templateData);
        }

        const adminTemplateName = 'admin_template.html';
        const adminEmailHtml = EmailView.getTemplate(adminTemplateName, templateData);

        const emailUser = new EmailModel(to, subject, userEmailHtml);
        const emailAdmin = new EmailModel(
            process.env.ADMIN_EMAIL,
            'Novo formulário submetido',
            adminEmailHtml
        );

        try {
            await emailUser.sendEmail();
            await emailAdmin.sendEmail();

            
            let query, values;
            switch (templateName) {
                case 'admin_template_devolucao.html':
                    query = `INSERT INTO returns_form (name, company, phone, email, vat, prodRef, designation, seriesNumber, invoiceDate, invoiceNumber, quantity, state, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
                    values = [
                        templateData.name,
                        templateData.company,
                        templateData.phone,
                        templateData.email,
                        templateData.taxNumber,
                        templateData.productRef,
                        templateData.designation,
                        templateData.serialNumber,
                        templateData.invoiceDate,
                        templateData.invoiceNumber,
                        templateData.quantity,
                        templateData.state,
                        templateData.message
                    ];
                    break;
                case 'admin_template.html':
                    query = `INSERT INTO contact_form (name, company, phone, email, subject, message) VALUES (?, ?, ?, ?, ?, ?)`;
                    values = [
                        templateData.name,
                        templateData.company,
                        templateData.phone,
                        templateData.email,
                        templateData.subject,
                        templateData.message
                    ];
                    break;
                
                default:
                    throw new Error('Template desconhecido');
            }

            db.query(query, values, (err, result) => {
                if (err) {
                    console.error('Erro ao inserir dados na tabela:', err);
                    throw err;
                }
                console.log('Dados inseridos com sucesso na tabela');
            });

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }
}

module.exports = EmailController;
