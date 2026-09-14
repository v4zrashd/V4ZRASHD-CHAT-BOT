module.exports.config = {
  name: "font",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "V4ZRASHD",
  description: "Convert text into fonts",
  commandCategory: "Others",
  usages: "<1-10> <text>",
  usePrefix: true,
  cooldowns: 0
};

module.exports.run = async ({ event, api, args }) => {

  const fonts = [
    { name: "1", map: mono() },
    { name: "2", map: full() },
    { name: "3", map: squared() },
    { name: "4", map: squaredSmall() },
    { name: "5", map: negative() },
    { name: "6", map: italicBold() },
    { name: "7", map: sansBold() },
    { name: "8", map: serifBold() },
    { name: "9", map: fraktur() },
    { name: "10", map: doubleStruck() }
  ];

  if (args.length < 2) {
    return api.sendMessage(
`┏━━━━━━━━━━━━━━━━━━━┓
┃    🌸AVAILABLE FONTS🌸
┣━━━━━━━━━━━━━━━━━━━┫
┃ 1) 𝚅𝟺𝚉𝚁𝙰𝚂𝙷𝙳 𝚁𝙰𝚂𝙷𝙴𝙳
┃ 2) Ｖ４ＺＲＡＳＨＤ ＲＡＳＨＥＤ
┃ 3) 🅅❹🅉🅁🄰🅂🄷🄳 🅁🄰🅂🄷🄴🄳
┃ 4) 🅥④🅩🅡🅐🅢🅗🅓 🅡🅐🅢🅗🅔🅓
┃ 5) 🆅④🆉🆁🅰🆂🅷🅳 🆁🅰🆂🅷🅴🅳
┃ 6) 𝙑𝟰𝙕𝙍𝘼𝙎𝙃𝘿 𝙍𝘼𝙎𝙃𝙀𝘿
┃ 7) 𝗩𝟰𝗭𝗥𝗔𝗦𝗛𝗗 𝗥𝗔𝗦𝗛𝗘𝗗
┃ 8) 𝐕𝟒𝐙𝐑𝐀𝐒𝐇𝐃 𝐑𝐀𝐒𝐇𝐄𝐃
┃ 9) 𝖵𝟜𝖹𝖱𝖠𝖲𝖧𝖣 𝖱𝖠𝖲𝖧𝖤𝖣
┃10) 𝕍𝟜ℤℝ𝔸𝕊ℍ𝔻 ℝ𝔸𝕊ℍ𝔼𝔻
┣━━━━━━━━━━━━━━━━━━━┫
┃Use: Reply font <1-10>
┗━━━━━━━━━━━━━━━━━━━┛`,
      event.threadID,
      event.messageID
    );
  }

  const type = args.shift();
  const font = fonts.find(f => f.name === type);
  if (!font) {
    return api.sendMessage("Invalid font number.", event.threadID, event.messageID);
  }

  const text = args.join(" ");
  const result = text.split("").map(c => font.map[c] || c).join("");
  return api.sendMessage(result, event.threadID, event.messageID);
};


function mono() {
  return gen("𝙰", "𝚉", "𝚊", "𝚣", "𝟶");
}

function full() {
  return gen("Ａ", "Ｚ", "ａ", "ｚ", "０");
}

function squared() {
  return gen("🄰", "🅉", "🄰", "🅉", "⓿");
}

function squaredSmall() {
  return gen("🅐", "🅩", "🅐", "🅩", "⓪");
}

function negative() {
  return gen("🅰", "🆉", "🅰", "🆉", "⓪");
}

function italicBold() {
  return gen("𝘼", "𝙕", "𝙖", "𝙯", "𝟬");
}

function sansBold() {
  return gen("𝗔", "𝗭", "𝗮", "𝘇", "𝟬");
}

function serifBold() {
  return gen("𝐀", "𝐙", "𝐚", "𝐳", "𝟎");
}

function fraktur() {
  return gen("𝖠", "𝖹", "𝖺", "𝖿", "𝟘");
}

function doubleStruck() {
  return gen("𝔸", "ℤ", "𝕒", "𝕫", "𝟘");
}


function gen(A, Z, a, z, n) {
  const m = { " ": " " };

  for (let i = 0; i < 26; i++) {
    m[String.fromCharCode(65 + i)] = String.fromCodePoint(A.codePointAt(0) + i);
    m[String.fromCharCode(97 + i)] = a
      ? String.fromCodePoint(a.codePointAt(0) + i)
      : m[String.fromCharCode(65 + i)];
  }

  if (n) {
    for (let i = 0; i < 10; i++) {
      try {
        m[i] = String.fromCodePoint(n.codePointAt(0) + i);
      } catch {
        m[i] = i.toString();
      }
    }
  }

  return m;
}
