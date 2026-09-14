const axios = require("axios");

const dipto = "https://www.noobs-api.rf.gd/dipto";

module.exports.config = {
  name: "numinfo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Dipto",
  description: "Get SIM information by number",
  commandCategory: "Information",
  usages: "numinfo <number>",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  if (!args[0]) {
    return api.sendMessage(
      "⚠️ দয়া করে একটি নম্বর দিন!",
      event.threadID,
      event.messageID
    );
  }

  let number = args[0];

  if (number.startsWith("01")) {
    number = "88" + number;
  }

  try {
    if (api.setMessageReaction)
      api.setMessageReaction("⌛", event.messageID, () => {}, true);

    const { data } = await axios.get(
      `${dipto}/numinfo?number=${encodeURIComponent(number)}`
    );

    if (!data.info || !data.info.length) {
      return api.sendMessage(
        "❌ কোনো তথ্য পাওয়া যায়নি।",
        event.threadID,
        event.messageID
      );
    }

    let body = data.info
      .map(
        (i) =>
          `👤 Name: ${i.name}\n📱 Type: ${i.type || "Not found"}`
      )
      .join("\n\n");

    const msg = { body };

    if (data.image) {
      const image = await axios.get(data.image, {
        responseType: "stream"
      });
      msg.attachment = image.data;
    }

    api.sendMessage(msg, event.threadID, event.messageID);

  } catch (err) {
    console.log(err);

    api.sendMessage(
      `❌ Error: ${err.message}`,
      event.threadID,
      event.messageID
    );
  }
};