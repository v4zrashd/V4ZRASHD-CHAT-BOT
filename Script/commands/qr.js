const QRCode = require("qrcode");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "qr",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "V4ZRASHD",
  description: "Generate a QR code from text or link",
  commandCategory: "utility",
  usages: "qr <text/url>",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  const text = args.join(" ");
  if (!text) {
    return api.sendMessage("❌ Usage: qr <text/url>\n\nExample: qr https://t.me/v4zrasehd", event.threadID, event.messageID);
  }

  const filePath = path.join(__dirname, "cache", "qr_code.png");

  try {
    await QRCode.toFile(filePath, text, { width: 512, margin: 1 });
    return api.sendMessage(
      { body: `✅ QR Code generated for:\n${text}`, attachment: fs.createReadStream(filePath) },
      event.threadID,
      () => fs.unlinkSync(filePath),
      event.messageID
    );
  } catch (e) {
    return api.sendMessage("❌ Failed to generate QR code: " + e.message, event.threadID, event.messageID);
  }
};