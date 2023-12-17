/* بواسطة https://github.com/ALBERTO9883 */
import fs from 'fs';
import fetch from 'node-fetch';
import { googleImage } from '@bochilteam/scraper';

const handler = async (m, { text, usedPrefix, command, conn }) => {
  try {
    const res2 = await googleImage(text);
    const sfoto = res2.getRandom();

    if (!text) throw `*[❗] يجب إدخال اسم الملصق الذي تريد البحث عنه*`;

    const json = await fetch(`https://api.akuari.my.id/search/sticker?query=${text}`);
    const jsons = await json.json();
    
    const res = jsons.result.map((v, index) => 
      `*🪴 • النتيجة:* ${1 + index}\n*🌵 • الاسم:* ${v.title}\n*🍂 • الرابط:* ${v.url}`
    ).join`\n\n───\n\n`;

    await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m);
  } catch {
    await m.reply('*[❗] خطأ، حاول مرة أخرى*');
  }
};

handler.tags = ['sticker', 'search'];
handler.command = ['stickersearch', 'searchsticker', 'stickerssearch', 'searchstickers'];
export default handler;
