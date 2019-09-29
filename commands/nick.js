module.exports = {
    name: "nick",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Nick Lorusso`);
        message.reply(msg);
    }
}