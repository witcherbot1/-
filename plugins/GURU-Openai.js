import fetch from 'node-fetch';
import axios from 'axios'
import translate from '@vitalets/google-translate-api'
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: global.openai_org_id, apiKey: global.openai_key });
const openaiii = new OpenAIApi(configuration);
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `الرجاء تقديم نص أو اي شئ برسالة للحصول على رد.`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    m.react(rwait)
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/d879cbad22d59e9f6c94d.jpg' },
      caption: 'سيبني افكر....'
    }, {quoted: m})
    conn.sendPresenceUpdate('composing', m.chat);
   let res = await gpt.ChatGpt(text, syms)

    let ia2 = await fetch(`https://vihangayt.me/tools/chatgpt?q=${text}`)
    
    try {
      let response = await ia2.json()
      let data = await response.json();
      let result = data.result;

      if (!result) {
        
        throw new Error('لا يوجد استجابة JSON صالحة من الAPI الأول');
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
    } catch (error) {
      console.error('خطأ من الAPI الأول:', error);

  
      const model = 'llama';
      const senderNumber = m.sender.replace(/[^0-9]/g, ''); 
      const session = `ZORO_BOT_${senderNumber}`;
      let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=${m.sender}`)
      
      let response = await tioress.json()
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
    }

    } catch {
        throw `*[❗] خطأ، يرجى إدخال نص صحيح*`;
  }
};
handler.help = ['chatgpt']
handler.tags = ['AI']
handler.command = ['يحب', 'chatgpt', 'ai', 'gpt'];

export default handler;
