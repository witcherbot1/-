const handler = async (m, {usedPrefix}) => {
  try {
    delete global.chatgpt.data.users[m.sender];
    m.reply(`*[❗] تم حذف الذاكرة الوسيطة للدردشة التفاعلية (ChatGPT) بنجاح*\n\n*—◉ يرجى إعادة تشغيل الأمر ${usedPrefix}chatgpt2 أو ${usedPrefix}ia2*`);
  } catch (error1) {
    console.log(error1);
    throw `*[❗] خطأ، لا يمكن حذف الذاكرة الوسيطة لشات جي بي تي*`;
  }
};
handler.command = ['حذف-gpt|حذف-ذكاءاصطناعي'];
export default handler;
