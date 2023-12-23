const handler = async (m, {conn, text, command, usedPrefix, args}) => {
// let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
  const pp = 'https://telegra.ph/file/d5486f9d731696e07cc2f.jpg';

  // 60000 = 1 minuto // 30000 = 30 segundos // 15000 = 15 segundos // 10000 = 10 segundos
  const time = global.db.data.users[m.sender].wait + 10000;
  if (new Date - global.db.data.users[m.sender].wait < 10000) throw `*🕓 عليك أن تنتظر ${Math.floor((time - new Date()) / 1000)} ثانية قبل أن تلعب مرة أخرى*`;

  if (!args[0]) return conn.reply(m.chat, `*حجره 🗿, ورقه 📄 أو مقص ✂️*\n\n*—◉ اختر الأداة التي تريد استخدامها:*\n*◉ ${usedPrefix + command} حجره*\n*◉ ${usedPrefix + command} ورقه*\n*◉ ${usedPrefix + command} مقص*`, m);
  // conn.sendButton(m.chat, `*𝐏𝐢𝐞𝐝𝐫𝐚 🗿, 𝐏𝐚𝐩𝐞𝐥 📄 𝐨 𝐓𝐢𝐣𝐞𝐫𝐚 ✂️*\n\n*—◉  𝙿𝚎𝚍𝚎𝚜 𝚞𝚜𝚊𝚛 𝚕𝚘𝚜 𝚋𝚘𝚝𝚘𝚗𝚎𝚜 𝚙𝚊𝚛𝚊 𝚓𝚞𝚐𝚊𝚛 𝚘 𝚝𝚊𝚖𝚋𝚒𝚎𝚗 𝚙𝚞𝚎𝚍𝚎𝚜 𝚞𝚜𝚊𝚛 𝚎𝚜𝚝𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜:*\n*◉ ${usedPrefix + command} piedra*\n*◉ ${usedPrefix + command} papel*\n*◉ ${usedPrefix + command} tijera*`, wm, pp, [['Piedra 🗿', `${usedPrefix + command} piedra`], ['Papel 📄', `${usedPrefix + command} papel`], ['Tijera ✂️', `${usedPrefix + command} tijera`]], m)
  let astro = Math.random();
  if (astro < 0.34) {
    astro = 'piedra';
  } else if (astro > 0.34 && astro < 0.67) {
    astro = 'tijera';
  } else {
    astro = 'papel';
  }
  const textm = text.toLowerCase();
  if (textm == astro) {
    global.db.data.users[m.sender].exp += 500;
    m.reply(`*🔰 تعادل!*\n\n*👉🏻 أنت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*🎁 جائزة +500 نقطة خبرة*`);
  } else if (text == 'papel') {
    if (astro == 'piedra') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 أنت الفائز! 🎉*\n\n*👉🏻 أنت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*🎁 جائزة +1000 نقطة خبرة*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ أنت الخاسر! ❌*\n\n*👉🏻 أنت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*❌ خصم -300 نقطة خبرة*`);
    }
  } else if (text == 'tijera') {
    if (astro == 'papel') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 أنت الفائز! 🎉*\n\n*👉🏻 أنت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*🎁 جائزة +1000 نقطة خبرة*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ أنت الخاسر! ❌*\n\n*👉🏻 أنت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*❌ خصم -300 نقطة خبرة*`);
    }
  } else if (textm == 'tijera') {
    if (astro == 'papel') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 أنت الفائز! 🎉*\n\n*👉🏻 أنت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*🎁 جائزة +1000 نقطة خبرة*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ أنت الخاسر! ❌*\n\n*👉🏻 أنت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*❌ خصم -300 نقطة خبرة*`);
    }
  } else if (textm == 'papel') {
    if (astro == 'piedra') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 أنت الفائز! 🎉*\n\n*👉🏻 أنت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*🎁 جائزة +1000 نقطة خبرة*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ أنت الخاسر! ❌*\n\n*👉🏻 أنت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*❌ خصم -300 نقطة خبرة*`);
    }
  } else if (textm == 'piedra') {
    if (astro == 'tijera') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*🥳 أنت الفائز! 🎉*\n\n*👉🏻 أنت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*🎁 جائزة +1000 نقطة خبرة*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*☠️ أنت الخاسر! ❌*\n\n*👉🏻 أنت: ${textm}*\n*👉🏻 البوت: ${astro}*\n*❌ خصم -300 نقطة خبرة*`);
    }
  }
  global.db.data.users[m.sender].wait = new Date * 1;
};
handler.help = ['ppt'];
handler.tags = ['games'];
handler.command = /^(تحديي)$/i;
export default handler;
