const os = require("os");
const pidusage = require("pidusage");

module.exports.config = {
  name: "system",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "V4ZRASHD",
  description: "Show server/system information",
  commandCategory: "system",
  usages: "system",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  const pid = pidusage(process.pid)
    .then(stat => stat.cpu.toFixed(2))
    .catch(() => "0.00");

  const cpuModel = os.cpus()[0]?.model || "Unknown CPU";
  const cores = os.cpus().length;
  const totalMem = (os.totalmem() / 1073741824).toFixed(2);
  const freeMem = (os.freemem() / 1073741824).toFixed(2);
  const usedMem = (totalMem - freeMem).toFixed(2);
  const uptimeMs = os.uptime() * 1000;
  const up = Math.floor(uptimeMs / 86400000);

  const msg = `⚙️ 𝐒𝐘𝐒𝐓𝐄𝐌 𝐈𝐍𝐅𝐎
━━━━━━━━━━━━━━━
🖥 CPU: ${cpuModel}
🔢 Cores: ${cores}
🌡 CPU Usage: ${await pid}%
━━━━━━━━━━━━━━━
💾 RAM (Total): ${totalMem} GB
📊 RAM (Used): ${usedMem} GB
🟢 RAM (Free): ${freeMem} GB
━━━━━━━━━━━━━━━
🕐 Server Uptime: ${up} days
🐧 OS: ${os.type()} ${os.release()}
🏓 Platform: ${os.platform()} (${os.arch()})`;

  return api.sendMessage(msg, event.threadID);
};