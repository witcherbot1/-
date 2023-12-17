import gplay from "google-play-scraper";

let handler = async (m, { conn, text }) => {
  if (!text) throw "*[❗] يجب إدخال اسم التطبيق الذي تريد البحث عنه*";
  let res = await gplay.search({ term: text });
  if (!res.length) throw `*[❗] لم يتم العثور على أي تطبيق يتطابق مع البحث*`;

  // تحضير بيانات إعلان الرد الخارجي
  let opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };

  // تحضير نص الرد
  res = res.map(
    (v) =>
      `*🔍 النتيجة:* ${v.title}
       *✍️ المطور:* ${v.developer}
       *💸 السعر:* ${v.priceText}
       *📈 التقييم:* ${v.scoreText}
        *⛓️ الرابط:* ${v.url}`
  ).join`\n\n`;

  // إرسال الرد
  m.reply(res, null, opt);
};
handler.help = ['playstore <اسم التطبيق>'];
handler.tags = ['internet'];
handler.command = /^(تطبيق)$/i;
export default handler;
