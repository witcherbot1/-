import fetch from 'node-fetch';
const handler = async (m, {text, usedPrefix, command}) => {
  if (!text) throw `*[❗] يرجى إدخال اسم البلد، استخدم ${usedPrefix + command} cairo*`;
  const res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)));
  if (!res.ok) throw await res.text();
  const json = await res.json();
  if (!json.confirmed) throw 'الرجاء تحديد اسم بلد صحيح.';
  if (json.confirmed) {
    m.reply(`
🌏 البلد: ${text}
✅ المصابين: ${json.confirmed.value}
📉 المتعافون: ${json.recovered.value}
☠️ الوفيات: ${json.deaths.value}
💌 تحديث: ${json.lastUpdate}
`.trim());
  } else throw json;
};
handler.help = ['covid'].map((v) => v + ' <país>');
handler.tags = ['info'];
handler.command = /^(كرونا|كوفد|covid19)$/i;
export default handler;
