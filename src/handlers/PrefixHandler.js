const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    client.commands = new Map();
    
    const categories = fs.readdirSync(path.join(__dirname, '../Commands/PrefixCommands'));
    
    for (const category of categories) {
        const commandFiles = fs.readdirSync(path.join(__dirname, `../Commands/PrefixCommands/${category}`)).filter(file => file.endsWith('.js'));
        
        for (const file of commandFiles) {
            const command = require(path.join(__dirname, `../Commands/PrefixCommands/${category}/${file}`));
            client.commands.set(command.name, command);
        }
    }

    client.on('messageCreate', async (message) => {
        if (!message.guild || message.author.bot) return;

        const prefix = process.env.PREFIX;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName);

        if (command) {
            command.execute(client, message, args);
        }
    });
};