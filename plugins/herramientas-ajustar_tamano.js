import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, command, args, text}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '❗ الرجاء الرد على صورة أو فيديو.';
  if (!text) throw '⚠️️ الرجاء إدخال حجم الصورة أو الفيديو الجديد.';
  if (isNaN(text)) throw ' 🔢 يرجى إدخال أرقام فقط.';
  if (!/image\/(jpe?g|png)|video|document/.test(mime)) throw `⚠️️ الشكل غير مدعوم.`;
  const img = await q.download();
  const url = await uploadImage(img);

  if (/image\/(jpe?g|png)/.test(mime)) {
    conn.sendMessage(m.chat, {image: {url: url}, caption: `ها هو`, fileLength: `${text}`, mentions: [m.sender]}, {ephemeralExpiration: 24*3600, quoted: m});
  } else if (/video/.test(mime)) {
    return conn.sendMessage(m.chat, {video: {url: url}, caption: `ها هو`, fileLength: `${text}`, mentions: [m.sender]}, {ephemeralExpiration: 24*3600, quoted: m});
  }
};
handler.tags = ['tools'];
handler.help = ['tamaño <cantidad>'];
handler.command = /^(تحريرالحجم|طول-الملف|edittamaño|totamaño|tamaño)$/i;
export default handler;
