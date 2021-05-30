const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'howgay',
    description : 'It tells you how gay you are',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        let gayMember = message.mentions.users.first()
        if (!gayMember) gayMember = message.author
        const gayEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${gayMember.tag} is ${Math.floor(Math.random() * 100)}% gay!`)
    
        message.channel.send(gayEmbed)
    }
}

