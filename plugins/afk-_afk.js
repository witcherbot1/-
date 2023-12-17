export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  *[❗𝐈𝐍𝐅𝐎❗] العضو مشغول حاليا (AFK)${user.afkReason ? ' السبب: ' + user.afkReason : ''}*
  
  *—◉ وقت الانضمام للدردشة (AFK): ${(new Date - user.afk).toTimeString()}*
  `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`*[❗] لا يتواجد العضو حاليًا [❗]*

*—◉ العضو الذي قام بالانضمام غير متواجد حاليا (AFK)*      
*—◉ ${reason ? 'سبب الغياب (AFK): ' + reason : 'سبب الغياب (AFK): _العضو غير متواجد حاليا_'}*
*—◉ وقت آخر تفاعل (AFK): ${(new Date - afkTime).toTimeString()}*
  `.trim());
  }
  return true;
}
