import fetch from 'node-fetch';

let imdbHandler = async (m, { conn, text }) => {
  if (!text) throw 'يرجى تقديم عنوان الفيلم';

  try {
    let res = await fetch(`https://api.popcat.xyz/lyrics?song=${encodeURIComponent(text)}`);

    if (!res.ok) {
      throw new Error(`فشل طلب API مع الحالة ${res.status}`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    let ratings = json.ratings.map(rating => `• *${rating.title}:* ${rating.artist}`).join('\n');

    let movieInfo = 
    `*معلومات الفيلم:*\n
     • *عنوان:* ${json.title}\n
     • *المغني:* ${json.artist}\n
     • *الكلمات:* ${json.lyrics}
     `;

    // send the movie poster along with the movie information as caption
    await conn.sendFile(m.chat, json.image, 'poster.jpg', movieInfo, m);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
};

imdbHandler.help = ['Z O R O'];
imdbHandler.tags = ['S O N G S'];
imdbHandler.command = /^(معلومات-الاغنيه)$/i;

export default imdbHandler;
