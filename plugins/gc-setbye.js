const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text;
    m.reply('*[✅] تم تعيين رسالة الوداع بنجاح.*');
  } else throw `*[❗] يرجى إرسال نص لتعيين رسالة الوداع، مثال:*\n*- @user (المنشن)*`;
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['تغيرالمغادره|تغير-المغادره'];
handler.admin = true;
export default handler;
