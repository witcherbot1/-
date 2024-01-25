const handler = async (m, {conn, text}) => {
  if (!text) throw '*[❗تنبيه❗] قم بالرد على العضو الذي تريد إلغاء حظره بواسطة @ منشن*';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*[❗تنبيه❗] قم بالرد على العضو الذي تريد إلغاء حظره بواسطة @ منشن*';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `*[❗تنبيه❗] تم إلغاء حظر العضو من استخدام البوت*\n*—◉ العضو الآن يمكنه استخدام جميع الأوامر بشكل طبيعي*`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^رفع-البان$/i;
handler.rowner = true;
export default handler;
