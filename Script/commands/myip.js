const axios = require("axios");

module.exports.config = {
  name: "myip",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "V4ZRASHD",
  description: "Show your current public IP and location info",
  commandCategory: "utility",
  usages: "myip",
  cooldowns: 10
};

module.exports.run = async function ({ api, event }) {
  try {
    const { data } = await axios.get("https://ipwho.is/");

    const msg = `📍 𝐌𝐘 𝐈𝐏 𝐈𝐍𝐅𝐎
━━━━━━━━━━━━━━━
🌐 IP: ${data.ip}
🏳️ Flag: ${data.flag?.emoji || ""}
🌍 Country: ${data.country}
🏙️ City: ${data.city}
🧭 Region: ${data.region}
📡 ISP: ${data.connection?.isp || "N/A"}
🏓 Type: ${data.type}`;

    return api.sendMessage(msg, event.threadID, event.messageID);
  } catch (e) {
    return api.sendMessage("❌ Could not fetch IP info.", event.threadID, event.messageID);
  }
};