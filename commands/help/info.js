const { Client, Message, MessageEmbed, Channel } = require('discord.js');

module.exports = {
    name: 'info',
    description : 'The Info of the Bot',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const Embed = new MessageEmbed()
        .setTitle("Info")
        .setDescription("**RamboBot** is coded by `Dipzy#4425`")
        
        .setTimestamp()
        message.channel.send(Embed);

    }
}