class ContactEmailModel {
    static async getEmailByContactOption(option) {
        const contactEmails = {
            // geral: 'sensordin@sensordin.pt',
            // suporte: 'suporte@sensordin.pt',
            // comercial: 'comercial@sensordin.pt',
            // financeiro: 'financeiro@sensordin.pt',
            // faturacao: 'faturacao@sensordin.pt',
            // qualidade: 'qualidade@sensordin.pt',
            // logistica: 'logistica@sensordin.pt',
            general: 'brunotrodrigues16@outlook.com',
            support: 'brunotrodrigues16@outlook.com',
            commercial: 'brunotrodrigues16@outlook.com',
            financial: 'brunotrodrigues16@outlook.com',
            billing: 'brunotrodrigues16@outlook.com',
            quality: 'brunotrodrigues16@outlook.com',
            logistics: 'brunotrodrigues16@outlook.com',
        };

        return contactEmails[option];
    }
}

module.exports = ContactEmailModel;
