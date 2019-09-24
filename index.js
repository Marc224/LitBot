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
		}); 
	})

client.on("message", (message) => {  
  
  	let messageArray = message.content.split(/\s+/g);
  	let info = messageArray.slice(1).join(' ');

  	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();

	if (!message.content.startsWith(prefix)) return;
 
  	if (message.content.startsWith(prefix +'embed')) {
    	message.channel.send(exampleEmbed);
    	console.log(message.author.username + " has sucessfully ran the embed command!");
  	}
 
  	if (message.content.startsWith(prefix +'braden')) {
    	message.channel.send("Braden Mateus Won Prom Court 6 Times!");
  	}
 
 	 if (message.content.includes("nigga")) {
    	message.channel.send("Homie really :(");
  	}
 
  	if (message.content.startsWith(prefix +'announce')) {
		if (cmd.length = 0) {
			message.channel.send("You need a message in order to announce smh.");
		} else {
			// Will add code later to this
			return;
		}
  	}
});

// This token is safely stored on my pc :) 
client.login(config.token);