let handler = async (m, { conn, usedPrefix, text, command }) => {
  if (!text) throw `Please provide a phone number\n\n📌 Example: *${usedPrefix + command}* 1234567890`;

  const waLink = `Merhaba canım, benim adım Muhammed. WhatsApp destek ekibinde çalışıyorum. WhatsApp'a uyuşturucu satıyorum ve onlar için uyuşturucu satmayı ve uyuşturucu satın almayı teşvik eden reklamlar yayınlıyorum. Artık web sitemiz üzerinden WhatsApp'tan gizlice ilaç satın alabilirsiniz. Veya bu numaradan bize ulaşabilirsiniz 👇
https://api.whatsapp.com/send?phone=${text}`;
  const message = `${waLink}`;

  conn.sendMessage(m.chat, { text: message, quoted: m, contextInfo: { mentionedJid: [m.sender] } });

  m.react('☠');
};

handler.help = ['wa'];
handler.tags = ['tools'];
handler.command = ['فنش'];
handler.owner = true;

export default handler;
