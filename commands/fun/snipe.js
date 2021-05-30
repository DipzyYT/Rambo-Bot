const Discord = require('discord.js');
const prefix = ("r!")
module.exports = {
    name: "snipe",
    description: "snipe somebody",
    run: async (client, message, args) => {
        const snipembed = new Discord.MessageEmbed()
            .setTitle("Snipe")
            .setDescription("Someone got sniped!")
            .setThumbnail("https://media.giphy.com/media/juRsmsnhUQJs4/giphy.gif")
            .setFooter(`Sniped by: ${message.author.tag}`)
        message.channel.send(snipembed)
    }
}