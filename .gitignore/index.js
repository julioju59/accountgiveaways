const Discord = require("discord.js");

var PREFIX = "!!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Dev |!!");
    console.log("Le bot a bien aiter conecte");
})


bot.login("NDgzMjcyNzc3NzY4NjMyMzQ3.DmRRfA.TyUj_IkGp6K6d-YhmEQMSl38UbY");
