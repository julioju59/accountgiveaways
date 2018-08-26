const Discord = require("discord.js");

var PREFIX = "!!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Dev |!!");
    console.log("Le bot a bien aiter conecte");
})

Client.on('message', message => {

    if(message.content === prefix + "aide"){
        var help_enbed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici mes command d'aide :D")
        .setDescription("Voici mes commandes disponible")
        .addField("!!aide", "Affiche les command du bot!")
    }

})


bot.login("NDgzMjcyNzc3NzY4NjMyMzQ3.DmRDQw.aF057xSeWiUs5-q3ZbEFgYUL0Ms");
