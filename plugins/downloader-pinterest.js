import {pinterest} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗اشعار❗] يرجى إدخال كلمة مفتاحية للبحث على ${usedPrefix + command} Minecraft*`;
  const json = await pinterest(text);
  conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
*نتائج البحث في بينتيريست 𝑍𝑂𝑅𝑂⚡3𝑀𝐾*
${text}
`.trim(), m);
};
handler.help = ['pinterest <keyword>'];
handler.tags = ['internet'];
handler.command = /^(بينت)$/i;
export default handler;
