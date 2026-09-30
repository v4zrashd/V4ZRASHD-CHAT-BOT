const axios = require("axios");

const apiList = "https://gitlab.com/shahadat-sahu/sahu-api/-/raw/main/API.json";

const getMainAPI = async () => (await axios.get(apiList)).data.simsimi;

module.exports.config = {
  name: "autoreplybot",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "V4ZRASHD",
  usePrefix: false,
  commandCategory: "Chat",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, body, senderID } = event;
  if (!body) return;

  const msg = body.toLowerCase().trim();

  const exactResponses = {
    "miss you": "অরেক বেডারে Miss না করে xan মেয়ে হলে বস রাশেদ রে হাঙ্গা করো😶👻😘",
    "miss u too": "হুম আমি ও তোমাকে Miss করি... কিন্তু রাশেদ বস বেশি করে 😏💖",
    "kiss de": "কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬",
    "👍": "সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️",
    "hi": "এত হাই-হ্যালো কর ক্যান প্রিও..!😜🫵",
    "bc": "SAME TO YOU😊",
    "pro": "Khud k0o KYa LeGend SmJhTi Hai 😂",
    "good morning": "GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚",
    "good night": "Sweet Dream babu… তবে আগে রাশেদ বস কে GN বলে নিও 😏💤",
    "tor ball": "~ এখনো বাল উঠে নাই নাকি তোমার?? 🤖",
    "shahadat": "SHAHADAT এখন আর নেই..! এখানে এখন শুধু আমার বস 𝐕𝟒𝐙𝐑𝐀𝐒𝐇𝐃 (রাশেদ) 🧡😼",
    "owner": "‎[𝐎𝐖𝐍𝐄𝐑:☞ V4ZRASHD ☜\nTelegram Channel: https://t.me/v4zrasehd\nTelegram: https://t.me/rashdteem\nYouTube: https://youtube.com/@V4Zteem\nGitHub: https://github.com/v4zrashd",
    "admin": "He is V4ZRASHD তাকে সবাই Admin RASHED হিসেবে চিনে😘☺️",
    "babi": "এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.",
    "chup": "তুই চুপ চুপ কর পাগল ছাগল",
    "Assalamualaikum": "Walaikumassalam❤️‍🩹",
    "fork": "https://github.com/v4zrashd/V4ZRASHD-CHAT-BOT.git",
    "kiss me": "তুমি পঁচা তোমাকে কিস দিবো না 🤭",
    "thanks": "এতো ধন্যবাদ না দিয়ে আমার বস রাশেদ রে তোর গার্লফ্রেন্ড টা দিয়ে দে..!🐸🥵",
    "i love you": "মেয়ে হলে আমার বস রাশেদ এর ইনবক্সে এখুনি গুঁতা দিন🫢😻",
    "love you": "ভালোবাসা নামক আবলামী করতে চাইলে Boss রাশেদ এর ইনবক্সে গুতা দিন 😘",
    "by": "কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️",
    "ami shahadat": "হ্যাঁ।। আমার বস রাশেদেই ! 😏🧡 একদম ভুল হবে না।",
    "bot er baccha": "আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️",
    "tor nam ki": "MY NAME IS ─꯭─⃝‌‌𝐕𝟒𝐙𝐑𝐀𝐒𝐇𝐃 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭💖",
    "pic de": "এন থেকে সর দুরে গিয়া মর😒",
    "cudi": "এত চোদা চুদি করস কেনো..!🥱🌝🌚",
    "bal": "রাগ করে না সোনা পাখি 🥰",
    "heda": "এতো রাগ শরীরের জন্য ভালো না 🥰",
    "boda": "ভাই তুই এত হাসিস না..!🌚🤣",
    "kire ki koros": "তোমার কথা ভাবতে ছি জানু 😚",
    "ki koros": "বস রাশেদ এর সাথে প্রেমে ব্যস্ত আছি 😏💘",
    "kire bot": "হ্যাঁ সব কেমন আছেন আপনার ওই খানে উম্মাহ 😘😽🙈",
    "valo aso": "হ্যাঁ রে প্রিও, বস রাশেদ এর দোয়ায় ভালো আছি 😌💞",
    "pagol": "হুম পাগল, কিন্তু তোমারই পাগল 😏😂",
    "breakup": "চিন্তা করিস না… রাশেদ বস তো আছেই তোকে নতুন জন দিয়া দিবে 😎🔥",
    "tui ke": "আমি তোর বস রাশেদ এর ChatBot 😏",
    "tumi ke": "আমি 𝐕𝟒𝐙𝐑𝐀𝐒𝐇𝐃 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭, আমার বস রাশেদ..! 😏🧡",
    "ke baniyese": "আমার প্রযোজক আর বেস্ট ডেভেলপার হলো 𝐕𝟒𝐙𝐑𝐀𝐒𝐇𝐃 (রাশেদ) 🧡👑",
    "ke banieche": "আমাকে বানিয়েছে আমার বস 𝐕𝟒𝐙𝐑𝐀𝐒𝐇𝐃 (রাশেদ) 🧡",
    "who made you": "My creator is 𝐕𝟒𝐙𝐑𝐀𝐒𝐇𝐃 (Rashed) 🧡",
    "who created you": "𝐕𝟒𝐙𝐑𝐀𝐒𝐇𝐃 (Rashed) created me! 🧡",
    "umm": "এতো Umm কেনো জানু… কিছু বলবা? 😉",
    "hmm": "Hmmm কিসের হুমম জানু 🥵",
    "love": "Love করলে সরাসরি রাশেদ বস কে বল জানু 😻🔥"
  };

  const whoMadeAnswers = [
    "আমার প্রযোজক আর বেস্ট ডেভেলপার হলো 𝐕𝟒𝐙𝐑𝐀𝐒𝐇𝐃 (রাশেদ) 🧡👑",
    "আমাকে বানিয়েছে আমার বস 𝐕𝟒𝐙𝐑𝐀𝐒𝐇𝐃 (রাশেদ) 🧡💖",
    "Everyone knows — my creator is 𝐕𝟒𝐙𝐑𝐀𝐒𝐇𝐃 (Rashed) 🧡😘"
  ];

  let answer = exactResponses[msg];

  if (!answer) {
    const lower = body.toLowerCase();
    if (/কে\s*বানাই|কে\s*বানিয়ে|কে\s*বানাল|কে\s*বানায়|বানান\s*কে/.test(lower) ||
        /who\s*(made|created|build|invented)/.test(lower)) {
      answer = whoMadeAnswers[Math.floor(Math.random() * whoMadeAnswers.length)];
    }
  }

  if (!answer) return;

  if (!global.client.handleReply) global.client.handleReply = [];

  return api.sendMessage(
    answer,
    threadID,
    (err, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: senderID,
        type: "v4zrashd"
      });
    },
    messageID
  );
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  if (event.senderID !== handleReply.author) return;

  try {
    const text = event.body.trim();

    const base = await getMainAPI();
    const link = `${base}/simsimi?text=${encodeURIComponent(text)}`;

    const res = await axios.get(link);

    const reply = Array.isArray(res.data.response)
      ? res.data.response[0]
      : res.data.response;

    if (!global.client.handleReply) global.client.handleReply = [];

    return api.sendMessage(
      reply,
      event.threadID,
      (err, info) => {
        global.client.handleReply.push({
          name: module.exports.config.name,
          messageID: info.messageID,
          author: event.senderID,
          type: "v4zrashd"
        });
      },
      event.messageID
    );

  } catch {
    return api.sendMessage("🙂 একটু পরে আবার বলো", event.threadID, event.messageID);
  }
};

module.exports.run = async function ({ api, event }) {
  return module.exports.handleEvent({ api, event });
};
