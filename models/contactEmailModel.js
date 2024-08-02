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
            general: 'bruno.rodrigues@solinf.pt',
            support: 'bruno.rodrigues@solinf.pt',
            commercial: 'bruno.rodrigues@solinf.pt',
            financial: 'bruno.rodrigues@solinf.pt',
            billing: 'bruno.rodrigues@solinf.pt',
            quality: 'bruno.rodrigues@solinf.pt',
            logistics: 'bruno.rodrigues@solinf.pt',

        };

        return contactEmails[option];
    }
}

module.exports = ContactEmailModel;
