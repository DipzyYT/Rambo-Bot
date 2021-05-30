const { MessageEmbed, discord} = require('discord.js');
const prefix = ("r!")
module.exports = {
    name: "nuke",
    aliases:["explode"],
    description: "Eplode a channel.",
    run: async (client, message, args) => {
        if (message.member.hasPermission("MANAGE_CHANNELS") || owners.includes(message.author.id)) {

            let nukeChannel = message.mentions.channels.first();
            if (!nukeChannel) nukeChannel = message.channel
            const position = nukeChannel.position

            const nukedEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(` The Channel got exploded`)
                .setImage("https://media.discordapp.net/attachments/720812237794574347/765218830418182204/200.gif?width=269&height=150")

            nukeChannel.clone().then(c => {
                c.send(nukedEmbed);
                c.setPosition(position);
            })
            await nukeChannel.delete()
        } else return message.channel.send("You have no Permissions for this command");
}
}    


