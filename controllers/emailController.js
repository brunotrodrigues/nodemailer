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

            // Inserir dados na tabela `users`
            const userQuery = `
                INSERT INTO users (name, company, phone, email, vat_number)
                VALUES (?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                name=VALUES(name), company=VALUES(company), phone=VALUES(phone), email=VALUES(email)
            `;
            const userValues = [templateData.name, templateData.company, templateData.phone, templateData.email, templateData.vat];

            db.query(userQuery, userValues, (err, result) => {
                if (err) {
                    console.error('Erro ao inserir dados na tabela users:', err);
                    throw err;
                }

                const userId = result.insertId || result.upsertedId;

                // Inserir dados na tabela `returns`
                const returnsQuery = `
                    INSERT INTO returns (user_id, invoice_date, quantity, product_ref, serial_number, invoice_number, state, message)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                `;
                const returnsValues = [
                    userId,
                    templateData.invoiceDate,
                    templateData.quantity,
                    templateData.prodRef,
                    templateData.seriesNumber,
                    templateData.invoiceNumber,
                    templateData.state,
                    templateData.message
                ];

                db.query(returnsQuery, returnsValues, (err, result) => {
                    if (err) {
                        console.error('Erro ao inserir dados na tabela returns:', err);
                        throw err;
                    }
                    console.log('Dados inseridos com sucesso na tabela returns');
                });
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

            // Inserir dados na tabela `users`
            const userQuery = `
                INSERT INTO users (name, company, phone, email, vat_number)
                VALUES (?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                name=VALUES(name), company=VALUES(company), phone=VALUES(phone), email=VALUES(email)
            `;
            const userValues = [templateData.name, templateData.company, templateData.phone, templateData.email, templateData.vat];

            db.query(userQuery, userValues, (err, result) => {
                if (err) {
                    console.error('Erro ao inserir dados na tabela users:', err);
                    throw err;
                }

                const userId = result.insertId || result.upsertedId;

                // Inserir dados na tabela `guarantees`
                const guaranteesQuery = `
                    INSERT INTO guarantees (user_id, invoice_date, quantity, product_ref, serial_number, invoice_number, equipment_in_use, damage_mentioned, message)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                `;
                const guaranteesValues = [
                    userId,
                    templateData.invoiceDate,
                    templateData.quantity,
                    templateData.prodRef,
                    templateData.seriesNumber,
                    templateData.invoiceNumber,
                    templateData.equipmentUse,
                    templateData.damageMention,
                    templateData.message
                ];

                db.query(guaranteesQuery, guaranteesValues, (err, result) => {
                    if (err) {
                        console.error('Erro ao inserir dados na tabela guarantees:', err);
                        throw err;
                    }
                    console.log('Dados inseridos com sucesso na tabela guarantees');
                });
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

            // Inserir dados na tabela `users`
            const userQuery = `
                INSERT INTO users (name, company, phone, email, vat_number)
                VALUES (?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                name=VALUES(name), company=VALUES(company), phone=VALUES(phone), email=VALUES(email)
            `;
            const userValues = [templateData.name, templateData.company, templateData.phone, templateData.email, templateData.vat];

            db.query(userQuery, userValues, (err, result) => {
                if (err) {
                    console.error('Erro ao inserir dados na tabela users:', err);
                    throw err;
                }

                const userId = result.insertId || result.upsertedId;

                // Inserir dados na tabela `repairs`
                const repairsQuery = `
                    INSERT INTO repairs (user_id, invoice_date, quantity, product_ref, serial_number, invoice_number, message)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                `;
                const repairsValues = [
                    userId,
                    templateData.invoiceDate,
                    templateData.quantity,
                    templateData.prodRef,
                    templateData.seriesNumber,
                    templateData.invoiceNumber,
                    templateData.message
                ];

                db.query(repairsQuery, repairsValues, (err, result) => {
                    if (err) {
                        console.error('Erro ao inserir dados na tabela repairs:', err);
                        throw err;
                    }
                    console.log('Dados inseridos com sucesso na tabela repairs');
                });
            });

            res.status(200).send('Emails enviados com sucesso');
        } catch (error) {
            res.status(500).send('Erro ao enviar emails: ' + error.message);
        }
    }
}

module.exports = EmailController;
