import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw '*[❗] فين الرابط ؟*\n*ضيف رابط يحب*';
  const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
  if (!shortUrl1) throw `*[❗] خطأ اتاكد انك حطيت رابط*`;
  const done = `*✅ تم تنفيذ المهمة بنجاح!!*\n\n*الرابط قبل التقصير:*\n${text}\n*الرابط بعد التقصير:*\n${shortUrl1}`.trim();
  m.reply(done);
};
handler.help = ['tinyurl', 'acortar'].map((v) => v + ' <link>');
handler.tags = ['tools'];
handler.command = /^(تصغير|قص|تقصير|قصر)$/i;
handler.fail = null;
export default handler;
