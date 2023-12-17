import cheerio from 'cheerio';
import axios from 'axios';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!global.db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] التحقق من الفحص للمحتوى البالغين معطل +18، إذا كنت في مجموعة، يرجى تفعيل modohorny*';
  if (!text) throw '*[❗] يجب إدخال اسم البحث عن الهنتاي المراد، مثال: ' + usedPrefix + command + ' miku*';

  const searchResults = await searchHentai(text);

  let teks = searchResults.result.map((v, i) => `
${i + 1}. *_${v.title}_*
↳ 📺 *_المشاهدات:_* ${v.views}
↳ 🎞️ *_الرابط:_* ${v.url}`).join('\n\n');

  let randomThumbnail;

  if (searchResults.result.length > 0) {
    const randomIndex = Math.floor(Math.random() * searchResults.result.length);
    randomThumbnail = searchResults.result[randomIndex].thumbnail;
  } else {
    randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png';
    teks = '*[❗] لا توجد نتائج للبحث المحدد*';
  }

  conn.sendFile(m.chat, randomThumbnail, 'error.jpg', teks, m);
};

handler.command = /^(hentaisearch|searchhentai)$/i;
export default handler;

async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get('https://hentai.tv/?s=' + search).then(async ({ data }) => {
      const $ = cheerio.load(data);
      const result = {};
      const res = [];
      result.coder = 'rem-comp';
      result.result = res;
      result.warning = 'ممنوع بشكل صارم إعادة تحميل هذا الكود، حقوق الطبع © 2022 من قبل rem-comp';
      $('div.flex > div.crsl-slde').each(function (a, b) {
        const _thumbnail = $(b).find('img').attr('src');
        const _title = $(b).find('a').text().trim();
        const _views = $(b).find('p').text().trim();
        const _url = $(b).find('a').attr('href');
        const hasil = { thumbnail: _thumbnail, title: _title, views: _views, url: _url };
        res.push(hasil);
      });
      resolve(result);
    }).catch((err) => {
      console.log(err);
    });
  });
}
