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

	if (!cmd.startsWith(prefix)) return;
 
  	if (cmd.startsWith(prefix +'embed')) {
    	message.channel.send(exampleEmbed);
    	console.log(message.author.username + " has sucessfully ran the embed command!");
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
		message.channel.send(argsresult);
	}
});

// This token is safely stored on my pc :) 
client.login(config.token);