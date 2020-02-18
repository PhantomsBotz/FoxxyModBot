module.exports.run = (bot, message, args, Discord) => {
  let em = new Discord.RichEmbed()
  .setTitle("Foxxo Help")
  .addField("Help", "Shows this message.")
  .setColor("GOLD")
  
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "help"
}
