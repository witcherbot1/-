import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw '❗ يرجى تقديم كلمة للبحث عنها.\n مثال *اذلف*';

  const url = `https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(text)}`;

  const response = await fetch(url);
  const json = await response.json();

  if (!response.ok) {
    throw `⚠️ حدث خطأ: ${json.message}`;
  }

  if (!json.list.length) {
    throw '❌ الكلمة غير موجودة في القاموس.';
  }

  const firstEntry = json.list[0];
  const definition = firstEntry.definition;
  const example = firstEntry.example ? `*مثلا:* ${firstEntry.example}` : '';

  const message = `*كلمة:* ${text}\n*تعريف:* ${definition}\n${example} تم بواسطة ✅\n𝙍𝙊𝘽 🔰 BOT`;
  conn.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m });
};

handler.help = ['define <word>'];
handler.tags = ['tools'];
handler.command = /^معني/i;

export default handler;
