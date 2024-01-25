const handler = async (m, {conn, text, usedPrefix, command}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  const user = global.db.data.users[who];
  if (!who) throw `*[❗] يجب تحديد الشخص المراد إلغاء التمييز له بواسطة @username*`;
  if (!user) throw `*[❗] لا يوجد مستخدم بهذا المعرف*`;
  if (user.premiumTime = 0) throw '*[❗] المستخدم غير مميز حاليًا*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();

  user.premiumTime = 0;

  user.premium = false;

  const textdelprem = `*[❗] تم إلغاء التمييز لـ @${who.split`@`[0]}*`;
  m.reply(textdelprem, null, {mentions: conn.parseMention(textdelprem)});
};
handler.help = ['delprem <@user>'];
handler.tags = ['owner'];
handler.command = /^(حذف|-|del)التميز$/i;
handler.group = true;
handler.rowner = true;
export default handler;
