const Discord = require('discord.js');
const client = new Discord.Client;
const settings = require('./settings.json');

client.on('ready', () => {
    console.log('Logged and ready to go')
});

client.on('message', msg => {
    if (msg.author.equals(client.user)) return;

    if (!msg.content.startsWith(settings.prefix)) return;

    var args = msg.content.substring(settings.prefix.length).split(' ');

    switch (args[0]) {
        case 'ping': 
            msg.channel.send('pong')
            break;
        case 'dm': 
            let dmMember = msg.mentions.members.first();
            const dmmessage = args.slice(2).join(' ');
            dmMember.send(dmmessage)
            msg.delete();
            break;
    }
}) 

client.login(settings.token);