import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*⚠️ الرجاء إدخال رابط تيك توك يحتوي على صور.* 🐉`;
if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`الرابط غير صالح، يرجى إدخال رابط صحيح. جرب إضافة http:// أو https://`);
if (!text.includes('tiktok.com')) return m.reply(`*⚠️ رابط غير صالح.*`);
try {
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolkeysapi}&url=${text}`);
let anu = await res.json();
if (anu.status != '200') throw Error(anu.message);
anu = anu.result;
if (anu.length == 0) throw Error('خطأ: لا توجد بيانات');
let c = 0;
for (let x of anu) {
if (c == 0) await conn.sendMessage(m.chat, { image: { url: x }, caption: `✅ *تم إرسال 1 من بين ${anu.length} صور.* ✅\n_سيكون بقية الصور قابلة للرؤية في الدردشة الخاصة للبوت_ ✨` }, { quoted: m });
else await conn.sendMessage(m.sender, { image: { url: x } }, { quoted: m });
c += 1;
}
} catch (e) {
console.log(e);
throw `*⚠️ خطأ، يرجى المحاولة مرة أخرى.*`;
}}

handler.menu = ['tiktokslide <الرابط>'];
handler.tags = ['search'];
handler.command = /^((صور|صور)تيك)$/i;

handler.premium = true;
handler.limit = true;

export default handler;
