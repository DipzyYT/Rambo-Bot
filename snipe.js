const Discord = require('discord.js');
const prefix = ("r!")
module.exports = {
    name: "snipe",
    description: "snipe somebody",
    run: async (client, message, args) => {
        try {

            const msg = bot.snipes.get("834769905156620348","826854486970597436")
            if (!msg) return message.channel.send(noSnipe)
            const snipedEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(`${msg.author.tag}`, msg.author.displayAvatarURL())
                .setDescription(msg.content)
                .setTimestamp()
            message.channel.send(snipedEmbed)
        } catch (e) {

            const noSnipe = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription('I have found nothing!')
            message.channel.send(noSnipe)
        }
    }
}