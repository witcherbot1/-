import {toPTT} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
  if (!/video|audio/.test(mime)) throw `*[❗] يرجى الرد على ملف الفيديو أو الصوت الذي ترغب في تحويله إلى رسالة صوتية.*`;
  const media = await q.download?.();
  if (!media && !/video/.test(mime)) throw '*[❗] الملف فارغ أو لا يمكن تحميله، يرجى المحاولة مرة أخرى.*';
  if (!media && !/audio/.test(mime)) throw '*[❗] الملف فارغ أو لا يمكن تحميله، يرجى المحاولة مرة أخرى.**';
  const audio = await toPTT(media, 'mp4');
  if (!audio.data && !/audio/.test(mime)) throw '*[❗] لا يمكن تحويل الملف إلى رسالة صوتية، يرجى المحاولة مرة أخرى أو التحقق من صحة الملف.*';
  if (!audio.data && !/video/.test(mime)) throw '*[❗] لا يمكن تحويل الملف إلى رسالة صوتية، يرجى المحاولة مرة أخرى أو التحقق من صحة الملف.*';
  const aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, {mimetype: 'audio/mpeg'});
  if (!aa) return conn.sendMessage(m.chat, {audio: {url: media}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};
handler.help = ['tovn (reply)'];
handler.tags = ['audio'];
handler.command = /^to(vn|(ptt)?)$/i;
export default handler;
