import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
const handler = async (m, {conn, args}) => {
  if (!args[0]) throw '*[❗] يرجى إدخال رابط من YouTube، مثال: #ytmp3 https://www.youtube.com/watch?v=example*';
  await m.reply(`*_⏳جاري معالجة الصوت...⏳_*\n\n*◉ إذا لم يتم إرسال الصوت، جرب مع الأمر #playdoc أو #play.2 أو #ytmp4doc ◉*`);
  try {
    const q = '128kbps';
    const v = args[0];
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.audio[q].download();
    const ttl = await yt.title;
    const size = await yt.audio[q].fileSizeH;
    const cap = `*◉—⌈📥 تنزيل يوتيوب دل 📥⌋—◉*\n❏ *العنوان:* ${ttl}\n❏ *الحجم:* ${size}`.trim();
    await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m});
  } catch {
    try {
      const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      const n2 = lolh.result.link;
      const n3 = lolh.result.size;
      const cap2 = `*◉—⌈📥 تنزيل يوتيوب دل 📥⌋—◉*\n❏ *العنوان:* ${n}\n❏ *الحجم:* ${n3}`.trim();
      await conn.sendMessage(m.chat, {document: {url: n2}, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m});
    } catch {
      await conn.reply(m.chat, '*[❗] خطأ، لا يمكن الوصول إلى سيرفر التنزيل الخارجي*', m);
    }
  }
};
handler.command = /^يوتيوب2|ytadoc|ytmp3.2|yta.2$/i;
export default handler;
