const Discord = require('discord.js')
module.exports.execute = async(client, interaction) => {

interaction.reply('pong')

},

module.exports.config = {
    name: "ping",
    description: `x`,
    options: []
}