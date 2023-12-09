import fetch from 'node-fetch';

let imdbHandler = async (m, { conn, text }) => {
  if (!text) throw 'يرجى تقديم عنوان الفيلم';

  try {
    let res = await fetch(`https://api.popcat.xyz/imdb?q=${encodeURIComponent(text)}`);

    if (!res.ok) {
      throw new Error(`فشل طلب API مع الحالة ${res.status}`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    let ratings = json.ratings.map(rating => `• *${rating.source}:* ${rating.value}`).join('\n');

    let movieInfo = 
    `*معلومات الفيلم:*\n
     • *عنوان:* ${json.title}\n
     • *سنة:* ${json.year}\n
     • *تصنيف:* ${json.rated}\n
     • *مطلق سراحه:* ${json.released}\n
     • *مدة العرض:* ${json.runtime}\n
     • *الأنواع:* ${json.genres}\n
     • *مخرج:* ${json.director}\n
     • *كاتب:* ${json.writer}\n
     • *ممثلين:* ${json.actors}\n
     • *حبكة:* ${json.plot}\n
     • *اللغات:* ${json.languages}\n
     • *دولة:* ${json.country}\n
     • *الجوائز:* ${json.awards}\n
     • *ميتاسكور:* ${json.metascore}\n
     • *تقييم:* ${json.rating}\n
     • *الأصوات:* ${json.votes}\n
     • *معرف موقع IMB:* ${json.imdbid}\n
     • *يكتب:* ${json.type}\n
     • *دي في دي:* ${json.dvd}\n
     • *شباك التذاكر:* ${json.boxoffice}\n
     • *إنتاج:* ${json.production}\n
     • *موقع إلكتروني:* ${json.website}\n\n
     *التقييمات:*\n${ratings}`;

    // send the movie poster along with the movie information as caption
    await conn.sendFile(m.chat, json.poster, 'poster.jpg', movieInfo, m);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
};

imdbHandler.help = ['imdb'];
imdbHandler.tags = ['tools'];
imdbHandler.command = /^(فيلم|movie)$/i;

export default imdbHandler;
