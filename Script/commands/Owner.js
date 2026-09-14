const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "owner",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "V4ZRASHD",
  description: "Show Owner Info with styled box & photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {
  const cacheDir = __dirname + "/cache";

  const info = `
╔═════════════════════ ✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═════════════════════ ✿
║ 👑 𝗡𝗮𝗺𝗲 : 𝗩𝟰𝗭𝗥𝗔𝗦𝗛𝗗 (𝗥𝗮𝘀𝗵𝗲𝗱)
║ 🧸 𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲 : 𝗩𝟰𝗭𝗥𝗔𝗦𝗛𝗗
║ 🎂 𝗔𝗴𝗲 : 𝟭𝟴+
║ 💼 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗖𝗵𝗮𝘁𝗯𝗼𝘁 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿
╠═════════════════════ ✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═════════════════════ ✿
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 𝗖𝗵𝗮𝗻𝗻𝗲𝗹 :
║ t.me/v4zrasehd
║ 💬 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 :
║ t.me/Darkbdx1
║ ▶️ 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 :
║ youtube.com/@V4Zteem
║ 🐙 𝗚𝗶𝘁𝗛𝘂𝗯 :
║ github.com/v4zrashd
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗣𝗮𝗴𝗲 : 𝗖𝗼𝗺𝗶𝗻𝗴 𝗦𝗼𝗼𝗻...
╚═════════════════════ ✿
`;

  const localImages = ["owner1.jpg", "owner2.jpg", "owner3.jpg", "owner4.png"];
  const existing = localImages.filter(f => fs.existsSync(path.join(cacheDir, f)));

  const attachments = existing.length
    ? existing.map(f => fs.createReadStream(path.join(cacheDir, f)))
    : [];

  return api.sendMessage(
    {
      body: info,
      attachment: attachments
    },
    event.threadID
  );
};