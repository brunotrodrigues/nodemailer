const EmailModel = require('../models/emailModel');
const EmailView = require('../views/emailView');
const db = require('../config/db');

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

            const query = `INSERT INTO returns_form (name, company, phone, email, vat, prodRef, designation, seriesNumber, invoiceDate, invoiceNumber, quantity, state, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            const values = [
                templateData.name,
                templateData.company,
                templateData.phone,
                templateData.email,
                templateData.vat,
                templateData.prodRef,
                templateData.designation,
                templateData.seriesNumber,
                templateData.invoiceDate,
                templateData.invoiceNumber,
                templateData.quantity,
                templateData.state,
                templateData.message
            ];

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

            const query = `INSERT INTO warranty_form (name, company, phone, email, vat, prodRef, designation, seriesNumber, invoiceDate, invoiceNumber, quantity, damageMention, equipmentUse, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            const values = [
                templateData.name,
                templateData.company,
                templateData.phone,
                templateData.email,
                templateData.vat,
                templateData.prodRef,
                templateData.designation,
                templateData.seriesNumber,
                templateData.invoiceDate,
                templateData.invoiceNumber,
                templateData.quantity,
                templateData.damageMention,
                templateData.equipmentUse,
                templateData.message
            ];

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

    static async sendReparacaoEmail(req, res) {
        const { to, subject, templateData } = req.body;
        const clientTemplateName = 'template_reparacao.html';
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

            const query = `INSERT INTO repair_form (name, company, phone, email, vat, prodRef, designation, seriesNumber, invoiceDate, invoiceNumber, quantity, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            const values = [
                templateData.name,
                templateData.company,
                templateData.phone,
                templateData.email,
                templateData.vat,
                templateData.prodRef,
                templateData.designation,
                templateData.seriesNumber,
                templateData.invoiceDate,
                templateData.invoiceNumber,
                templateData.quantity,
                templateData.message
            ];

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
