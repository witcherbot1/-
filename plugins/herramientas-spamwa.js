const handler = async (m, {conn, text}) => {
  const [nomor, pesan, jumlah] = text.split('|');
  if (!nomor) throw '*[ ⚠️ ] الرجاء تحديد رقم الهاتف المستهدف.*\n*استخدام الأمر:*\n*—◉ #سبام الرقم|النص|العدد*\n*مثال:*\n*—◉ #سبام 5219999999999|رد :v|25*';
  if (!pesan) throw '*[ ⚠️ ] الرجاء إدخال النص الذي تريد إرساله.*\n*استخدام الأمر:*\n*—◉ #سبام الرقم|النص|العدد*\n*مثال:*\n*—◉ #سبام 5219999999999|رد :v|25*';
  if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] يجب أن يكون العدد رقم صحيح.*\n*استخدام الأمر:*\n*—◉ #سبام الرقم|النص|العدد*\n*مثال:*\n*—◉ #سبام 5219999999999|رد :v|25*';

  const fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net';
  const fixedJumlah = jumlah ? jumlah * 1 : 10;
  if (fixedJumlah > 50) throw '*[ ⚠️ ] تم تحديد عدد الرسائل أكثر من الحد الأقصى المسموح به (50 رسالة).*️';
  await m.reply(`*[❗] جاري إرسال رسائل إلى ${nomor}، الرجاء توقع مغادرة الهدف.*\n*العدد المطلوب:*\n*—◉ ${fixedJumlah} رسالة!*`);
  for (let i = fixedJumlah; i > 1; i--) {
    if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m);
  }
};
handler.help = ['spamwa <number>|<mesage>|<no of messages>'];
handler.tags = ['General'];
handler.command = /^spam(wa)?|سبام$/i;
handler.group = false;
handler.premium = true;
// handler.private = true
// handler.limit = true
export default handler;
