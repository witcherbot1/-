const handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = +new Date;
  user.afkReason = text;
  m.reply(`*[❗𝐈𝐍𝐅𝐎❗] ${conn.getName(m.sender)} الآن غير متواجد (AFK)، الرجاء عدم الإزعاج*\n\n*—◉ وقت الانضمام للدردشة (AFK)${text ? ': ' + text : ''}*
`);
};
handler.help = ['afk [سبب]'];
handler.tags = ['main'];
handler.command = /^afk$/i;
export default handler;
