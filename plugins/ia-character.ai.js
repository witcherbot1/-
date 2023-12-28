import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `_*< IA - CHARACTER.AI />*_\n\n*[ ℹ️ ] يرجى تقديم نص.*\n\n*[ 💡 ] مثال:* _${usedPrefix + command} مرحبًا، كيف حالك؟_`;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const API_URL = `https://vihangayt.me/tools/characterai?q=${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw '_*< IA - CHARACTER.AI />*_\n\n*[ ℹ️ ] تعذر الحصول على إجابة صالحة.*';
    }
  } catch (error) {
    throw `_*< IA - CHARACTER.AI />*_\n\n*[ ℹ️ ] حدث خطأ. يرجى المحاولة مرة أخرى لاحقًا.*`;
  }
};

handler.command = /^تستي$/i;

export default handler;
