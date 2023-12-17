const handler = async (m, {conn, text, participants}) => {
  const member = participants.map((u) => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  let total = 0;
  const sider = [];
  for (let i = 0; i < sum; i++) {
    const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  if (total == 0) return conn.reply(m.chat, `*[❗] الفريق نشط، لا توجد شبح فيه :D*`, m);
  m.reply(`*[ ⚠ تقرير عن الأعضاء الغير نشطين ⚠ ]*\n\n*المجموعة:* ${await conn.getName(m.chat)}\n*إجمالي الاعضاء:* ${sum}\n\n*[ 👻 قائمة الأعضاء الغير نشطين 👻 ]*\n${sider.map((v) => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*ملاحظة: هؤلاء الأعضاء يمكن أن يكونوا نشطين الآن وتم تحديث البيانات الخاصة بهم بنسبة 100% بناءً على الوقت الذي يكونوا فيه في المجموعة*`, null, {mentions: sider});
};
handler.command = /^(الاصنام|الاشباح|اصنام)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
