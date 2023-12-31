import { xpRange } from '../lib/levelling.js';
import Canvacord from 'canvacord';

let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;

  if (!(who in global.db.data.users)) throw `✳️ المستخدم غير موجود في قاعدة البيانات الخاصة بي`;

  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Menu2.jpg');
  let user = global.db.data.users[who];
  let { exp, level, role } = global.db.data.users[who];
  let { min, xp } = xpRange(user.level, global.multiplier);
  let username = conn.getName(who);

  let crxp = exp - min
  let customBackground  = './Assets/rankbg.jpg'
  let requiredXpToLevelUp = xp

  const card = await new Canvacord.Rank()
  .setAvatar(pp)
  .setLevel(level)
  .setCurrentXP(crxp) 
  .setRequiredXP(requiredXpToLevelUp) 
  .setProgressBar('#db190b', 'COLOR') // Set progress bar color here
  .setDiscriminator(who.substring(3, 7))
  .setCustomStatusColor('#db190b')
  .setLevelColor('#FFFFFF', '#FFFFFF')
  .setOverlay('#000000')
  .setUsername(username)
  .setBackground('IMAGE', customBackground)
  .setRank(level, 'المستوي', false)
  .renderEmojis(true)
  .build();

  const str = `🏮 *الاسم:* ${username}\n\n⚡ *الخبرة:* ${crxp} / ${requiredXpToLevelUp}\n\n🏅 *الرتبة:* *${role}*`

  try {
    conn.sendFile(m.chat, card, 'rank.jpg', str, m, false, { mentions: [who] });
    m.react('✅');
  } catch (error) {
    console.error(error);
  }}

handler.help = ['rank'];
handler.tags = ['economy'];
handler.command = ['مستواي', 'لفل', 'levelup', 'مستوي'];
export default handler;
