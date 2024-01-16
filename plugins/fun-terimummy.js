import fetch from 'node-fetch';
import translate from 'google-translate-api';

let yoMamaJokeHandler = async (m, { conn, text }) => {
  try {
    let res = await fetch(`https://yomamaindra.onrender.com/jokes`);

    if (!res.ok) {
      throw new Error(`فشلت طلبات الـ API برمز الحالة ${res.status}`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    let yoMamaJokeEnglish = json.joke;

    // ترجمة النص إلى اللغة العربية
    let translation = await translate(yoMamaJokeEnglish, { to: 'ar' });

    let yoMamaJokeArabic = translation.text;

    m.reply(yoMamaJokeArabic);
  } catch (error) {
    console.error(error);
    // يمكنك إضافة رسالة خاصة باللغة العربية لتوضيح فشل الطلب هنا
  }
};

yoMamaJokeHandler.help = ['نكتة-يا-أمك'];
yoMamaJokeHandler.tags = ['مرح'];
yoMamaJokeHandler.command = /^(نكتة-يا-أمك|امك|تيري-يا-أمك)$/i;

export default yoMamaJokeHandler;
