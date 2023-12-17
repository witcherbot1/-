import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*[❗] يرجى الرد على ملف الفيديو الذي ترغب في تحويله إلى صوت (MP3).*`;
  const media = await q.download();
  if (!media) throw '*[❗] الملف فارغ أو لا يمكن تحميله، يرجى المحاولة مرة أخرى.*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*[❗] لا يمكن تحويل الملف إلى صوت (MP3)، يرجى المحاولة مرة أخرى أو التحقق من صحة الملف.*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^ل(صوت|audio)$/i;
export default handler;
