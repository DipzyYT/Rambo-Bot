const Discord = require('discord.js');
const DisTube = require('distube');
const prefix = ("r!")
module.exports = {
    name: "play",
    aliases : ['p'],
    description: "Play Music",
    run: async (client, message, args) => {
     return distube.play(messaage, args.join(" "));
    
    }
}