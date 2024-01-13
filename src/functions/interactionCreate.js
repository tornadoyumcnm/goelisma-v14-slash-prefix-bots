module.exports.execute = async(client, interaction) => {
    if(interaction.isChatInputCommand()) {
     const command = client.slashCommands.get(interaction.commandName);
 
     if(!command) {
         return interaction.reply({ content: `${interaction.commandName} Böyle bir komutum Bulunmamakta.` })
     }
 
     await command.execute(client, interaction);
    }
 }
 
 module.exports.config = {
     name: "interactionCreate",
     once: false
 }
