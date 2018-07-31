var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NDczNjc3MTYwMzM1NTQwMjI0.DkFjBA.7NWUwUjzDAllyXDoLzCXOJi_9Ys';
const id = '473677160335540224';


bot.on('message', function(message) {
    if(message.author.bot) return;
    message.mentions.users.forEach(i => {
        if (i.bot == true && i.id == id) {
            let request = new XMLHttpRequest();
            let url ='https://yesno.wtf/api';
    
            request.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    let response = JSON.parse(this.responseText);
                    if (response != undefined) {
                        message.reply(response.image);
                    }
                    else {
                        message.reply("Ask again later.");
                    }
                }
            }
            request.open("GET", url, true);
            request.send();
        }
    });
});

bot.login(TOKEN);