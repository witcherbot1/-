import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `[❗] أنت مسجل بالفعل\n\nهل تريد إعادة التسجيل؟\n\n📌 استخدم الأمر التالي لإلغاء التسجيل:\n*${usedPrefix}تسجيل-الخروج* الايدي`;
  if (!Reg.test(text)) throw `*[❗] تنسيق خاطئ*\n\n*—◉ استخدم الأمر كالتالي: ${usedPrefix + command} اسم.عمر*\n*—◉ مثال: ${usedPrefix + command} زورو.19*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*[❗] ضــيــف اســمــك*';
  if (!age) throw '*[❗] ضــيــف عـــمـــرك*';
  if (name.length >= 30) throw '[❗] الـاســم طــويــل';
  age = parseInt(age);
  if (age > 100) throw '*[❗] يااااااااه انت لسا عايش 👴🏻*';
  if (age < 5) throw '*[❗] كوتي كوتي يا حلوه انتي 😲*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 *معلوماتك* 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *⚡ اسمك:* ${name}
┃ *🎈 عمرك:* ${age} años
┃ *✍ الايدي:* 
┃ ${sn}
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ ✨ أنت الآن عضو في البوت
┃ ✅ تم تسجيلك بنجاح!
┗┅ ━━━━━━━━━━━━ ┅ ━`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'Zoro.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(تفعيل|التفعيل|تسجيل|التسجيل)$/i;
export default handler;
