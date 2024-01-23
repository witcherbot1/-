import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api'; // استدعاء حزمة google-translate-api

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*ينشئ هذا الأمر صورًا من المطالبات النصية*\n\n*𝙴مثال للاستخدام*\n*◉ ${usedPrefix + Command} فتاة أنمي جميلة*\n*◉ ${usedPrefix + Command} Elon Musk باللون الوردي*`;

  try {
    m.reply('*الرجاء الانتظار، جارٍ إنشاء الصور...*');

    // قم بترجمة النص إلى الإنجليزية باستخدام Google Translate API
    const translatedText = await translate(text, { to: 'en' });

    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(translatedText)}`;
    const response = await fetch(endpoint);
    
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*فشل إنشاء الصورة*';
    }
  } catch {
    throw '*أُووبس! حدث خطأ ما أثناء إنشاء الصور. الرجاء معاودة المحاولة في وقت لاحق.*';
  }
};

handler.help = ['dalle'];
handler.tags = ['AI'];
handler.command = ['dalle', 'ارسم', 'imagine', 'openai2'];
export default handler;
