const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*[❗تنبيه❗] تم رفع الحظر عن الجروب*');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^رفع-الحظر$/i;
handler.rowner = true;
export default handler;
