import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw '*[❗اشعار❗] المستخدم المطلوب لا يتوفر، يرجى إدخال اسم المستخدم مع الأمر*';
  const res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
  conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ] تم استعراض الصورة الشخصية لـ ${text}*`, m, false);
};
handler.help = ['tiktokfoto'].map((v) => v + ' <username>');
handler.tags = ['downloader'];
handler.command = /^(معلومات-تيك|pptiktok)$/i;
export default handler;
