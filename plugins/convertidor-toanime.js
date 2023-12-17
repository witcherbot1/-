import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!/image/g.test(mime)) throw '*[❗] يجب أن يكون الملف نوع صورة*';
  m.reply('*[❗] يتم تحويل الصورة إلى صورة أنمي، يرجى الانتظار...*');
  const data = await q.download?.();
  const image = await uploadImage(data);
  try {
    const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
    await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
  } catch (i) {
    try {
      const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
      await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
    } catch (a) {
      try {
        const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
        await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
      } catch (e) {
        throw '*[❗] حدث خطأ أثناء تحويل الصورة إلى صورة أنمي، يرجى المحاولة مرة أخرى*';
      }
    }
  }
};
handler.help = ['toanime'];
handler.tags = ['tools'];
handler.command = /^(jadianime|لانمي)$/i;
export default handler;
