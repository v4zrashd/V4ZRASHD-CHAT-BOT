const axios = require("axios");

module.exports.config = {
  name: "btc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "V4ZRASHD",
  description: "Show current Bitcoin price in multiple currencies",
  commandCategory: "utility",
  usages: "btc",
  cooldowns: 10
};

module.exports.run = async function ({ api, event }) {
  try {
    const { data } = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,bdt,inr,eur,gbp");
    const btc = data.bitcoin;

    const msg = `🪙 𝐁𝐈𝐓𝐂𝐎𝐈𝐍 𝐏𝐑𝐈𝐂𝐄
━━━━━━━━━━━━━━━
🇺🇸 USD: $${btc.usd}
🇧🇩 BDT: ৳${btc.bdt}
🇮🇳 INR: ₹${btc.inr}
🇪🇺 EUR: €${btc.eur}
🇬🇧 GBP: £${btc.gbp}
━━━━━━━━━━━━━━━
🕐 Updated just now (CoinGecko)`;

    return api.sendMessage(msg, event.threadID, event.messageID);
  } catch (e) {
    return api.sendMessage("❌ Could not fetch Bitcoin price. Try again later.", event.threadID, event.messageID);
  }
};