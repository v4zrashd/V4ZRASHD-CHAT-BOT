module.exports.config = {
  name: "coin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "V4ZRASHD",
  description: "Heads or Tails coin flip, or roll a dice with 'd'",
  commandCategory: "game",
  usages: "coin [d]",
  cooldowns: 2
};

module.exports.run = async function ({ api, event, args }) {
  const random = Math.floor(Math.random() * 100) + 1;

  if (args[0] && (args[0] === "d" || args[0] === "dice")) {
    const face = Math.floor(Math.random() * 6) + 1;
    const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"][face - 1];
    return api.sendMessage(`🎲 𝐃𝐈𝐂𝐄 𝐑𝐎𝐋𝐋𝐄𝐃: ${face} ${dice}`, event.threadID);
  }

  const result = random <= 50 ? "HEADS 🪙" : "TAILS 🪙";
  return api.sendMessage(`🪙 𝐂𝐎𝐈𝐍 𝐅𝐋𝐈𝐏𝐏𝐄𝐃:\n\n${result}\n( ${random}% luck )`, event.threadID);
};