import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '*[❗] قم بإدخال الايدي الخاص بك، استخدم الأمر التالي: #الايدي*';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '*[❗] رقم التسلسل غير صحيح، قم بالتحقق من الأمر مرة أخرى #الايدي*';
  user.registered = false;
  m.reply(`*[ ✔ ] تم إلغاء التسجيل بنجاح، يمكنك إعادة التسجيل في أي وقت*`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^الغاء-التسجيل(ister)?$/i;
handler.register = true;
export default handler;
