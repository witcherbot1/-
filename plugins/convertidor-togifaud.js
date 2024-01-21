/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*[❗اشعار❗] يجب الرد على ملف فيديو لتحويله إلى GIF مع صوت*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*[❗] نوع الميديا المدعوم ليس (mp4)، يرجى الرد على ملف فيديو.*`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*اتفضل يحب✅\n𝐵𝑌:𝑍𝑂𝑅𝑂⚡𝐵𝑂𝑇*'}, {quoted: m});
};
handler.command = ['لجيف'];
export default handler;
