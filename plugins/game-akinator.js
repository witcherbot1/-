import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';
const handler = async (m, {conn, usedPrefix, command, text}) => {
  if (m.isGroup) return;
  const aki = global.db.data.users[m.sender].akinator;
  if (text == 'end') {
    if (!aki.sesi) return m.reply('*[❗] لا توجد جلسة قيد التشغيل لأكيناتور*');
    aki.sesi = false;
    aki.soal = null;
    m.reply('*[❗] تم إنهاء جلسة الأكيناتور بنجاح*');
  } else {
    if (aki.sesi) return conn.reply(m.chat, '*[❗] الأكيناتور قيد التشغيل، الرجاء الانتظار حتى يتم الانتهاء*', aki.soal);
    try {
      const res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkeysapi}`);
      const anu = await res.json();
      if (anu.status !== 200) throw '*[❗] خطأ، لا يمكن الوصول إلى خادم الأكيناتور*';
      const {server, frontaddr, session, signature, question, progression, step} = anu.result;
      aki.sesi = true;
      aki.server = server;
      aki.frontaddr = frontaddr;
      aki.session = session;
      aki.signature = signature;
      aki.question = question;
      aki.progression = progression;
      aki.step = step;
      const resultes2 = await translate(question, {to: 'ar', autoCorrect: false});
      let txt = `🎮 *اكيناتور* 🎮\n\n*𝙹𝚄𝙶𝙰𝙳𝙾𝚁: @${m.sender.split('@')[0]}*\n*𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰: ${resultes2.text}*\n\n`;
      txt += '*0 - نعم*\n';
      txt += '*1 - لا*\n';
      txt += '*2 - لا أعلم*\n';
      txt += '*3 - ربما نعم*\n';
      txt += '*4 - ربما لا*\n\n';
      txt += `*استخدم ${usedPrefix + command} end لإنهاء الجلسة*`;
      const soal = await conn.sendMessage(m.chat, {text: txt, mentions: [m.sender]}, {quoted: m});
      aki.soal = soal;
    } catch {
      m.reply('*[❗] خطأ، لا يمكن الوصول إلى خادم الأكيناتور*');
    }
  }
};
handler.menu = ['akinator'];
handler.tags = ['game'];
handler.command = /^(اكيناتور)$/i;
export default handler;
