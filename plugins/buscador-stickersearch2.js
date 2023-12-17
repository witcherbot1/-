/* Created By https://github.com/ALBERTO9883 */
import fs from 'fs';
import fetch from 'node-fetch';
import { googleImage } from '@bochilteam/scraper';

const handler = async (m, { text, usedPrefix, command, conn }) => {
  if (!text) throw `*[❗] يجب إدخال اسم الملصق الذي تريد البحث عنه*`;
  try {
    const res2 = await googleImage(text);
    const sfoto = res2.getRandom();
    const json = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkeysapi}&query=${text}`);
    const jsons = await json.json();
    const { stickers } = jsons.result[0];
    const res = jsons.result.map((v, index) => 
      `🌅 • النتيجة: ${1 + index}\n*🥗 • الاسم:* ${v.title}\n*🐢 • الفنان:* ${v.author}\n*🍂 • الرابط:* ${v.url}`
    ).join`\n\n───\n\n`;
    await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m);
  } catch {
    await m.reply('*[❗] خطأ، حاول مرة أخرى*');
  }
};

handler.command = ['stickersearch2', 'searchsticker2', 'stickerssearch2', 'searchstickers2'];
export default handler;
