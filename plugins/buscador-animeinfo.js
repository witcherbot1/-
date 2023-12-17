import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`*[❗اشعار❗] أدخل اسم أنمي للبحث عنه*`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `
🎀 • *العنوان:* ${result.title}
🎋 • *التنسيق:* ${result.type}
📈 • *الحالة:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
🍥 • *إجمالي الحلقات:* ${result.episodes}
🎈 • *المدة: ${result.duration}*
✨ • *مستوحى من:* ${result.source.toUpperCase()}
💫 • *تم الإصدار:* ${result.aired.from}
🎗 • *تم الانتهاء:* ${result.aired.to}
🎐 • *الشهرة:* ${result.popularity}
🎏 • *المفضلة:* ${result.favorites}
🎇 • *التصنيف:* ${result.rating}
🏅 • *الترتيب:* ${result.rank}
♦ • *الإعلان:* ${result.trailer.url}
🌐 • *الرابط:* ${result.url}
🎆 • *الخلفية:* ${resultes.text}
❄ • *ملخص:* ${resultes2.text}}`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*[❗] خطأ، حاول مرة أخرى*`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;
