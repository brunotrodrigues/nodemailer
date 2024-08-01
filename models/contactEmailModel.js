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
            geral: 'bruno.rodrigues@solinf.pt',
            suporte: 'bruno.rodrigues@solinf.pt',
            comercial: 'bruno.rodrigues@solinf.pt',
            financeiro: 'bruno.rodrigues@solinf.pt',
            faturacao: 'bruno.rodrigues@solinf.pt',
            qualidade: 'bruno.rodrigues@solinf.pt',
            logistica: 'bruno.rodrigues@solinf.pt',
        };

        return contactEmails[option];
    }
}

module.exports = ContactEmailModel;
