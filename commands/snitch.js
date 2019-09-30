module.exports = {
    name: "snitch",
    category: "info",
    description: "Returns latency and API ping",
    run: async (Discord, client, message, args) => {
        const random = message.guild.members.random().user;
        console.log(random);
        let randomembed = new Discord.RichEmbed()
            .setTitle('Snitch Bot')
            .setDescription(random + ' is part of the 9 trey bloods!')
            .setImage(random.avatar);
        message.channel.send(randomembed);
    }
}