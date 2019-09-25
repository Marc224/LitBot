const Discord = require("discord.js");
const config = require("./config.json");
const prefix = "!";
const client = new Discord.Client();
 
client.on("ready", () => {
	console.log(`Hi, ${client.user.username} is now online!`);
	
		client.user.setPresence({
			status: "online",
			game: {
				name: "me getting developed",
				type: "STREAMING"
			}
	}	); 
});
client.on("message", (message) => {  
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	const cmd = message.content;
	const user = message.mentions.users.first();
	const random = message.guild.members.random();

	if (!cmd.startsWith(prefix)) return;
 
  	if (cmd.startsWith(prefix +'embed')) {
    	message.channel.send(exampleEmbed);
    	console.log(message.author.username + " has successfully ran the embed command!");
  	}
 
  	if (cmd.startsWith(prefix +'braden')) {
    	message.channel.send("Braden Mateus Won Prom Court 6 Times!");
  	}
 
 	if (cmd.includes("nigga")) {
		message.delete();
    	message.reply(" said the N Word, go bully them!");
  	}
 
  	if (message.content.startsWith(prefix +'announce')) {
		message.delete();
		let argsresult = args.join(" ");
		if(args <= 0) {
			message.reply("incorrect usage. Please do " + prefix + "announce <message to be sent>");
		} else {
			message.channel.send(argsresult);
		}
	}
	if(cmd.startsWith(prefix + 'snitch')) {
		message.channel.send(random + " is part of the 9 trey bloods");
		const avatarEmbed = new Discord.RichEmbed()
        .setColor(0x333333)
        .setImage(random.user.avatarURL);
		message.channel.send(avatarEmbed);
	}
});

// This token is safely stored on my pc :) 
client.login(config.token);