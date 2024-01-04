import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `قول اي حاجه!`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    m.react(rwait)
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/c6e93e154336db7585c98.jpg' },
      caption: 'سيبني افكر....'
    }, {quoted: m})

  try {
    m.react('⚡');
    var apii = await fetch(`https://aemt.me/bard?text=${text}`);
    var res = await apii.json();
    await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }

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
    }

  } catch (error) {
    console.error(error);
    throw '*احا ايرور*';
  }
};

handler.command = ['تست'];
handler.help = ['bard'];
handler.tags = ['herramientas'];
handler.premium = false;

export default handler;
