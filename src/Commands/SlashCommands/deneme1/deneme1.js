const Discord = require('discord.js')
module.exports.execute = async(client, interaction) => {

interaction.reply(`${interaction.client.user.username}`)

},

module.exports.config = {
    name: "help",
    description: `xx`,
    options: []
}