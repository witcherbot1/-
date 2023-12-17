import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗اشعار❗] يرجى إرسال استعلام للبحث عن الصور. مثال: ${usedPrefix + command} luffy*`;
  //if (m.text.includes('gore') || m.text.includes('cp')|| m.text.includes('porno')|| m.text.includes('Gore')|| m.text.includes('rule')|| m.text.includes('CP')|| m.text.includes('Rule34')) return m.reply('[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙽𝚅𝙸𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙽𝚃𝙴𝙽𝙸𝙴𝙽𝙳𝙾 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾\n𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny');
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `🔎 *نتائج البحث عن:* ${text}\n🔗 *الرابط:* ${link}\n🌎 *مصدر الصورة:* Google`, m);
};
handler.help = ['gimage <query>', 'imagen <query>'];
handler.tags = ['internet', 'tools'];
handler.command = /^(gimage|صوره|imagen)$/i;
export default handler;
