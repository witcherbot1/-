const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*[❗تنبيه❗] تم حظر هذه المجموعة من استخدام البوت*\n\n*—◉ لا يمكن لأعضاء المجموعة استخدام أوامر البوت بعد الآن*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^حظر$/i;
handler.rowner = true;
export default handler;
