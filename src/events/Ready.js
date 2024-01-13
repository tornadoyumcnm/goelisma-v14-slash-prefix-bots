const { Collection, ActivityType } = require("discord.js")
const fs = require("fs")
const Discord = require("discord.js");
    
module.exports = (client) => {
    client.on('ready', () => {
        setInterval(() => {
            client.user.setActivity(`Goelisma V14 Slash & Prefix Boş Altyapı.`);
        }, 5000);
        console.log(`Bot Durum Aktif.`);
    });
};

