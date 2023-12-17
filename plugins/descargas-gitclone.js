import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `*[ ℹ️ ] يرجى إدخال رابط GitHub.*\n\n*[ ℹ️ ] مثال:* _${usedPrefix + command} https://github.com/BrunoSobrino/TheShadwo-Bot-MD _`;
  if (!regex.test(args[0])) throw '*[ ℹ️ ] الرابط الذي قدمته غير صحيح.*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`*[ ℹ️ ] يتم إرسال الملف. انتظر...*\n\n*[ ℹ️ ] إذا لم يتم إرساله، قد يكون ذلك بسبب تجاوز الحجم المسموح به.*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['descargas'];
handler.command = /gitclone/i;
export default handler;
