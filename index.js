const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
 
const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

client.on("message", (message) => {
  const cmd = message.content;
  const msg = message.channel.send;
  if (cmd == 'embed') {
    msg(exampleEmbed);
    console.log(message.author.username + " has sucessfully ran the embed command!");
  }
  if (cmd == 'braden') {
    msg('Braden Mateus Won Prom Court 6 Times!');
  }
  if (message.content.includes("nigga")) {
    msg('Homie really :(');
  }
});

// This token is safely stored on my pc :) 
client.login(config.token);