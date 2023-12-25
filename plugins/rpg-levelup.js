import { canLevelUp, xpRange } from '../lib/levelling.js';
import { levelup } from '../lib/canvas.js';

const handler = async (m, { conn }) => {
  const name = conn.getName(m.sender);
  const usertag = '@' + m.sender.split('@s.whatsapp.net')[0];
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const { min, xp, max } = xpRange(user.level, global.multiplier);
    const message = `
🏰 *نقابة المغامرين*
*مرحبًا، ${usertag}!*

*◉ المستوى الحالي:* ${user.level}
*◉ الرتبة الحالية:* ${user.role}
*◉ نقاط الخبرة:* ${user.exp - min}/${xp}

*—◉ للارتقاء بالمستوى، يجب عليك الحصول على ${max - user.exp} نقطة خبرة إضافية. استمر في التفاعل مع البوت!*`.trim();
    return conn.sendMessage(m.chat, {text: message, mentions: [m.sender]}, {quoted: m});
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const levelUpMessage = `🎉 ¡مبرووووك، ${name}! لقد ارتقيت إلى المستوى ${user.level}`;
    const levelUpDetails = `
🚀 *تقدم في المستوى جديد*

*◉ المستوى السابق:* ${before}
*◉ المستوى الجديد:* ${user.level}
*◉ الرتبة الحالية:* ${user.role}

*—◉ استمر في استكشاف وأداء المهام لتحقيق إنجازات جديدة في نقابة المغامرين. استمر في التفاعل مع البوت!*`.trim();
    try {
      const levelUpImage = await levelup(levelUpMessage, user.level);
      conn.sendFile(m.chat, levelUpImage, 'levelup.jpg', levelUpDetails, m);
    } catch (e) {
      conn.sendMessage(m.chat, {text: levelUpDetails, mentions: [m.sender]}, {quoted: m});
    }
  }
};
handler.help = ['levelup'];
handler.tags = ['xp'];
handler.command = ['مستواي', 'لفل', 'levelup', 'مستوي'];
export default handler;
