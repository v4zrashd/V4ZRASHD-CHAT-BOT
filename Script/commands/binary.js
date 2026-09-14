module.exports.config = {
  name: "binary",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "V4ZRASHD",
  description: "Convert text to binary or binary to text",
  commandCategory: "utility",
  usages: "binary [b2t/t2b] <text>",
  cooldowns: 3
};

const textToBinary = (text) =>
  Array.from(text).map(char => char.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");

const binaryToText = (bin) =>
  bin.split(" ").map(byte => String.fromCharCode(parseInt(byte, 2))).join("");

module.exports.run = async function ({ api, event, args }) {
  const [mode, ...rest] = args;

  if (mode === "b2t") {
    const bin = rest.join(" ");
    if (!/^[01\s]+$/.test(bin)) {
      return api.sendMessage("❌ Invalid binary format! Use only 0 and 1.", event.threadID, event.messageID);
    }
    return api.sendMessage("🔤 𝐃𝐄𝐂𝐎𝐃𝐄𝐃 𝐓𝐄𝐗𝐓:\n" + binaryToText(bin), event.threadID, event.messageID);
  }

  const text = args.join(" ");
  if (!text) return api.sendMessage("❌ Usage: binary [t2b] <text>\n\nSend 'binary t2b hello' or 'binary b2t 01101000...'", event.threadID, event.messageID);

  return api.sendMessage("💾 𝐁𝐈𝐍𝐀𝐑𝐘 𝐂𝐎𝐃𝐄:\n" + textToBinary(text), event.threadID, event.messageID);
};