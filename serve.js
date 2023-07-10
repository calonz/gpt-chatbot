const { Client, Events, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`GPT Chatbot is active for ${c.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
