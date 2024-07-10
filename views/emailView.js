const fs = require('fs');
const path = require('path');

class EmailView {
    static getTemplate(templateName, data) {
        const templatePath = path.join(__dirname, '../templates', templateName);
        let template = fs.readFileSync(templatePath, 'utf8');

        for (const key in data) {
            template = template.replace(new RegExp(`{{${key}}}`, 'g'), data[key]);
        }

        return template;
    }
}

module.exports = EmailView;
