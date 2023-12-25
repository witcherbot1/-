import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
  let pp = 'https://telegra.ph/file/06cc652844ea19e8aed1c.jpg';
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `المستخدم الذي ذكرته غير مسجل في قاعدة البيانات الخاصة بي`;
  try {
    pp = await conn.profilePictureUrl(who);
  } catch (e) {
  } finally {
    const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.users[who];
    const username = conn.getName(who);
    const prem = global.prems.includes(who.split `@` [0]);
    const sn = createHash('md5').update(who).digest('hex');
    const str = `*اســمــك:* ${username} ${registered ? '(' + name + ') ': ''}
*رقـــمــك:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*رابطك:* wa.me/${who.split`@`[0]}${registered ? '\n*العــمر:* ' + age + ' سنه' : ''}
*الـمــاسـك:* ${limit} 𝚄𝚂𝙾𝚂
*مــســجــل:* ${registered ? 'نعم': 'لا'}
*بـريـمــيــوم:* ${premiumTime > 0 ? 'يب' : (isPrems ? 'يب' : 'لا') || ''}
*الايدي:* 
${sn}`;
    conn.sendMessage(m.chat, {image: {url: pp}, caption: str}, {quoted: m});
  }
};
handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^بروفايل|بروفايلي?$/i;
export default handler;
