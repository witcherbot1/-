import yts from 'yt-search';
import fs from 'fs';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] اسم الأغنية مفقود، يرجى إدخال الأمر متبوعًا بالاسم أو العنوان.*\n\n*—◉ مثال:*\n*${usedPrefix + command} rewrite the stars*`;
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoList) {
      global.videoList = [];
    }
    if (global.videoList[0]?.from == m.sender) {
      global.videoList.splice(0, global.videoList.length);
    }
    const results = await yts(text);
    const textoInfo = `*[❗] يمكنك تحميل الفيديو الذي تريده بالطريقة التالية:*
◉ ${usedPrefix}الصوت <numero>
◉ ${usedPrefix}الفيديو <numero> 

*—◉ أمثلة:*
*◉ ${usedPrefix}صوت 5*
*◉ ${usedPrefix}فيديو 8*`.trim();
    const teks = results.all.map((v, i) => {
      const link = v.url;
      vids_.urls.push(link);
      return `[${i + 1}] ${v.title}
↳ 🫐 *_الرابط :_* ${v.url}
↳ 🕒 *_المدة :_* ${v.timestamp}
↳ 📥 *_تم النشر :_* ${v.ago}
↳ 👁 *_المشاهدات :_* ${v.views}`;
    }).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
    conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m);
    global.videoList.push(vids_);
  } catch {
    await m.reply('*[❗اشعار❗] حدث خطأ، لا يمكن العثور على مصدر الفيديو.*');
  }
};
handler.help = ['playlist *<texto>*'];
handler.tags = ['search'];
handler.command = /^قائمه-التشغيل|playlist2$/i;
export default handler;
