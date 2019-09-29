module.exports = {
    name: "braden",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const msg = message.channel.send(`Braden Mateus`);
        message.reply(msg);
    }
}