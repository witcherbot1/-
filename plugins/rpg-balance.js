const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`
┌───⊷ *الماس* ⊶
▢ *الاسم:* ${name}
▢ *الماس:* ${global.db.data.users[who].limit}💎
└──────────────
*ملاحظات:* 
*يمكنك شراء الماس باستخدام الأوامر التالية 💎*
❏ *${usedPrefix}شراء <cantidad>*
❏ *${usedPrefix}شراءالكل*`);
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'الماس', 'balance'];
export default handler;
