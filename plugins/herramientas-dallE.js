import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] يرجى إدخال نص لإنشاء صورة منها باستخدام نموذج DALL-E*\n\n*—◉ أمثلة للإستخدام*\n*◉ ${usedPrefix + command} Arabic man*\n*◉ ${usedPrefix + command} Zoro*`;
    await conn.sendMessage(m.chat, {text: '*[⏳] ثانيه يحب الصوره بتجهز.*'}, {quoted: m});
  try {
    const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
    const json1 = await tiores1.json();
    await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m});
  } catch {  
      console.log('[❗] خطأ في API الرقم 1 لـ DALL-E.');  
  try {
    const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m});
  } catch {
      console.log('[❗] خطأ في API الرقم 2 لـ DALL-E.');
  try {
    const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
    const json3 = await tiores3.json();
    await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m});
  } catch {
      console.log('[❗] خطأ في API الرقم 3 لـ DALL-E.');
  try {
    const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m});
  } catch {
    console.log('[❗] خطأ، لا توجد APIs صالحة.');
    throw `*[❗] خطأ، لم يتم العثور على نتائج.*`;
  }}
 }}
};
handler.command = ['ارسم', 'تخيل', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'imagine'];
export default handler;
