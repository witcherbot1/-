import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `الرجاء تقديم نص أو استشهاد برسالة للحصول على رد.`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    m.react(rwait)
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/c3f9e4124de1f31c1c6ae.jpg' },
      caption: 'فكرة....'
    }, {quoted: m})
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);

    const model = 'llama';
    const senderNumber = m.sender.replace(/[^0-9]/g, ''); 
    const session = `GURU_BOT_${senderNumber}`;
    const guru2 = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`;
    
    let response = await fetch(guru2);
    let data = await response.json();
    let result = data.completion;

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key,
        type: 14,
        editedMessage: {
          imageMessage: { caption: result }
        }
      }
    }, {});
    m.react(done);

  } catch (error) {
    console.error('خطأ:', error);
    throw `*خطأ*`;
  }
};
handler.help = ['chats']
handler.tags = ['ذكاء صناعي']
handler.command = ['bo'];

export default handler;
