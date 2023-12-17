/*//////////////////////////////////////////////

        [ ❗ ] CREDITOS - NO MODIFICAR [ ❗ ]

           Codigo hecho por @BrunoSobrino
       Github: https://github.com/BrunoSobrino
       
       Nota: Solo hay disponibles efectos en
       ingles, por lo que el texto en otros
       idiomas puede sonar raro.
       
//////////////////////////////////////////////*/

import axios from 'axios';
import fetch from 'node-fetch';
const handler = async (m, { conn, usedPrefix, command, text, args }) => {
  const [efecto, ...textoArray] = text.split(" ");
  const texto = textoArray.join("");

  if (!efecto) {
    let voiceList = await getVoiceList();
    let responseText = `*[❗] لم تقم بإدخال تأثير، يرجى إدخال تأثير صوتي.*\n\n*—◉ اختر أحد الآثار التالية:*\n`;

    for (let i = 0, count = 0; count < 100 && i < voiceList.resultado.length; i++) {
      const entry = voiceList.resultado[i];
      if (entry.ID.length <= 20) {
        responseText += `*◉ ${usedPrefix + command} ${entry.ID} نصك_هنا*\n`;
        count++;
      }
    }

    return conn.sendMessage(m.chat, { text: responseText.trim() }, { quoted: m });
  }

  let efectoValido = false;
  let voiceList = await getVoiceList();
  for (const entry of voiceList.resultado) {
    if (entry.ID === efecto) {
      efectoValido = true;
      break;
    }
  }

  if (!efectoValido) return conn.sendMessage(m.chat, { text: `*[❗] الأثر المقدم غير موجود في القائمة، استخدم ${usedPrefix + command} للحصول على قائمة الأثر.*` }, { quoted: m });

  if (!texto) return conn.sendMessage(m.chat, {text: `*[❗] يرجى إدخال النص الذي تريد تحويله إلى صوت.*\n\n*—◉ مثال:*\n*◉ ${usedPrefix + command} ${efecto} مرحبًا، هذا مثال على استخدام الأمر.*`}, {quoted: m});

  let masivo = await makeTTSRequest(texto, efecto);
  conn.sendMessage(m.chat, {audio: {url: masivo.resultado}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};

handler.command = /^(g?tts2|انطق2)$/i;
export default handler;

const secretKey = 'fe2ee40099494579af0ecf871b5af266';
const userId = 'SrgwcKcLzSY63IdsAxd1PzscFjL2';

async function getVoiceList() {
  const url = 'https://play.ht/api/v2/voices';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      AUTHORIZATION: `Bearer ${secretKey}`,
      'X-USER-ID': userId
    }
  };
  try {
    const response = await fetch(url, options);
    const responseData = await response.json(); 
    const uniqueData = responseData.reduce((acc, current) => {
      if (!acc.some(item => item.id === current.id)) {
        acc.push(current);
      }
      return acc;
    }, []);
    const simplifiedList = uniqueData.map(entry => ({
      ID: entry.id,
      name: entry.name,
      lenguaje: entry.language  
    }));
    return { resultado: simplifiedList ? simplifiedList : '[❗] خطأ، لم يتم الحصول على إجابة من الAPI.' };
  } catch (error) {
    console.error('Error:', error);
    return { resultado: '[❗] خطأ، لم يتم الحصول على إجابة من الAPI.' };
    throw error;
  }
}

async function makeTTSRequest(texto, efecto) {
  const requestData = {text: texto, voice: efecto};
  const headers = {
    'Authorization': `Bearer ${secretKey}`,
    'X-User-Id': userId,
    'accept': 'text/event-stream',
    'content-type': 'application/json'
  };
  try {
    const response = await axios.post('https://play.ht/api/v2/tts', requestData, { headers });
    const events = response.data.split('\r\n\r\n');
    const eventData = events.find(event => event.includes('"stage":"complete"'));
    const urlMatch = eventData.match(/"url":"([^"]+)"/);
    const url = urlMatch ? urlMatch[1] : null;
    return { resultado: url ? url : '[❗] لم يتم العثور على عنوان URL في الإجابة.' };
  } catch (error) {
    console.error('Error:', error);
    return { resultado: '[❗] خطأ، لم يتم الحصول على إجابة من الAPI.' };
  }
}
