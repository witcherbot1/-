const handler = async (m, {conn, text, usedPrefix, command}) => {
  global.db.data.sticker = global.db.data.sticker || {};
  if (!m.quoted) throw '*[❗] يجب الرد على ملصق أو صورة لتحديد الأمر*';
  if (!m.quoted.fileSha256) throw '*[❗] لا يوجد ملصق أو صورة مدرجة لديها hash*';
  if (!text) throw `*[❗] يرجى تحديد نص الأمر والرد على ملصق أو صورة*\n\n*مثال:*\n*—◉ ${usedPrefix + command} <نص> <الرد على ملصق أو صورة>*`;
  const sticker = global.db.data.sticker;
  const hash = m.quoted.fileSha256.toString('base64');
  if (sticker[hash] && sticker[hash].locked) throw '*[❗] هذا الأمر مقفل ولا يمكن تعديله*';
  sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false};
  m.reply(`*[ ✔ ]* *تم تعيين الأمر بنجاح*`);
};
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset'];
handler.rowner = true;
export default handler;
