import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: 'لينك الجروب',
      body: '𝚃𝚑𝚎Zoro - 𝙱𝚘𝚝',
      previewType: 0, thumbnail: fs.readFileSync('./Menu2.jpg'),
      sourceUrl: ` `}}});
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^لينك$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
