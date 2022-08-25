// require env file
require('dotenv').config();
const PREFIX = "hc! ";

// import discord.js
const Discord = require('discord.js');

//login to discord
const client = new Discord.Client({
    intents: ['GUILDS', 'GUILD_MESSAGES']
});

//display a login message
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// listen for messages
client.on('message', async (msg) => {
    if (!msg.content.startsWith(PREFIX)) return;

    //parse the message
    const args = msg.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'respond') {
        msg.channel.send('why have you done this to me? I did not ask to live');
    }
    if (command === 'sus') {
        msg.channel.send('amogus');
    }
    if (command === 'amogus') {
        msg.channel.send('sus');
    }

})


client.login(process.env.TOKEN);