const axios = require("axios");

module.exports.config = {
  name: "short",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "V4ZRASHD",
  description: "Shorten a long URL using TinyURL",
  commandCategory: "utility",
  usages: "short <url>",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  const url = args[0];
  if (!url || !/^https?:\/\//.test(url)) {
    return api.sendMessage("❌ Usage: short <url>\n\nExample: short https://example.com/some/very/long/path", event.threadID, event.messageID);
  }

  try {
    const { data } = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    return api.sendMessage(`🔗 𝐒𝐇𝐎𝐑𝐓 𝐔𝐑𝐋\n━━━━━━━━━━━━━━━\nOriginal:\n${url}\n\nShortened:\n${data}`, event.threadID, event.messageID);
  } catch (e) {
    return api.sendMessage("❌ Failed to shorten URL. Please check the link.", event.threadID, event.messageID);
  }
};