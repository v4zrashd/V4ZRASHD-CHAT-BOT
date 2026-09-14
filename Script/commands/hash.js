const crypto = require("crypto");

module.exports.config = {
  name: "hash",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "V4ZRASHD",
  description: "Generate MD5, SHA1, SHA256, SHA512 hash of a text",
  commandCategory: "utility",
  usages: "hash <text>",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const text = args.join(" ");
  if (!text) {
    return api.sendMessage("❌ Usage: hash <text>\n\nExample: hash hello", event.threadID, event.messageID);
  }

  const algorithms = ["md5", "sha1", "sha256", "sha512"];
  let msg = "🔐 𝐇𝐀𝐒𝐇 𝐑𝐄𝐒𝐔𝐋𝐓\n\n📝 Input: " + text + "\n\n";

  msg += algorithms
    .map(algo => `▸ ${algo.toUpperCase()}:\n${crypto.createHash(algo).update(text).digest("hex")}`)
    .join("\n\n");

  return api.sendMessage(msg, event.threadID, event.messageID);
};