const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "admin",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "V4ZRASHD",
 description: "Show Owner Info",
 commandCategory: "info",
 usages: "admin",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const ownerPic = __dirname + "/cache/owner1.jpg";

 return api.sendMessage({
 body: `
┌───────────────⭓
│ 𝗢𝗪𝗡𝗘𝗥 𝗗𝗘𝗧𝗔𝗜𝗟𝗦
├───────────────
│👤 𝐍𝐚𝐦𝐞 : V4ZRASHD (Rashed)
│🚹 𝐆𝐞𝐧𝐝𝐞𝐫 : Maile
│❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧 : Single
│🎂 𝐀𝐠𝐞 : 18+
│🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 : Islam
│🎓 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : HSC (2026)
│🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : Khagrachori 
└───────────────⭓

┌───────────────⭓
│ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
├───────────────
│✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 𝗖𝗵𝗮𝗻𝗻𝗲𝗹:
│https://t.me/v4zrasehd
│💬 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺:
│https://t.me/rashdteem
│▶️ 𝗬𝗼𝘂𝗧𝘂𝗯𝗲:
│https://youtube.com/@V4Zteem
│🐙 𝗚𝗶𝘁𝗛𝘂𝗯:
│https://github.com/v4zrashd
└───────────────⭓

┌───────────────⭓
│ 🕒 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗧𝗶𝗺𝗲
├───────────────
│ ${time}
└───────────────⭓
 `,
 attachment: fs.existsSync(ownerPic) ? fs.createReadStream(ownerPic) : []
 }, event.threadID);
};
