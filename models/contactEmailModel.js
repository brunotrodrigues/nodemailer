class ContactEmailModel {
    static async getEmailByContactOption(option) {
        const contactEmails = {
            geral: 'tiagomarquez2003@gmail.com',
            suporte: 'suporte@sensordin.pt',
            comercial: 'comercial@sensordin.pt',
            financeiro: 'financeiro@sensordin.pt',
            faturacao: 'faturacao@sensordin.pt',
            qualidade: 'qualidade@sensordin.pt',
            logistica: 'logistica@sensordin.pt',
        };

        return contactEmails[option];
    }
}

module.exports = ContactEmailModel;
