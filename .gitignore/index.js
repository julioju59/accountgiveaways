const Discord = require("discord.js");

var PREFIX = "!!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Dev |!!");
    console.log("Le bot a bien aiter conecte");
})


bot.login("NDgzMjg1OTQ5MzI1NzcwNzUz.DmRO0g.QnhCe0lZvKEDd_8ZE23A3D4S5Pk");
