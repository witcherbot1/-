const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*[❗] يجب عليك ذكر شخص لحساب النسبة*`;
  const percentages = (500).getRandom();
  let emoji = '';
  let description = '';
  switch (command) {
    case 'gay2':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% مثلي. ${emoji}*\n*-❥ هذا منخفض... أنت مثلي، ليس مثلك! 😄*`;
      } else if (percentages > 100) {
        description = `*الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% مثلي. ${emoji}*\n*-❥ حتى أكثر مثلي مما كنا نعتقد! 💃*`;
      } else {
        description = `*الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% مثلي. ${emoji}*\n*-❥ لك، أنت فعلاً مثلي. ☠*`;
      }
      break;
    case 'lesbiana':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ ربما تحتاج إلى المزيد من الأفلام الرومانسية في حياتك. 🎬*`;
      } else if (percentages > 100) {
        description = `*الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ هذا حب متطرف للفتيات! 👩‍❤️‍👩*`;
      } else {
        description = `*الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ لنبقي الحب متفتحاً! 🌸*`;
      }
      break;
    case 'pajero':
    case 'pajera':
      emoji = '😏💦';
      if (percentages < 50) {
        description = `*الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ ربما تحتاج إلى هوايات أكثر! 🎨*`;
      } else if (percentages > 100) {
        description = `*الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ هذا مقاومة قابلة للإعجاب! 💪*`;
      } else {
        description = `*الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ حافظ على العمل الجيد (بمفردك). 🙌*`;
      }
      break;
    case 'puto':
    case 'puta':
      emoji = '🔥🥵';
      if (percentages < 50) {
        description = `*الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ المزيد من الحظ في محاولتك القادمة! 💔*`;
      } else if (percentages > 100) {
        description = `*الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ أنت في اللهب! 🚒*`;
      } else {
        description = `*الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ احتفظ بهذا السحر المحترق! 🔥*`;
      }
      break;
    case 'manco':
    case 'manca':
      emoji = '💩';
      if (percentages < 50) {
description = *الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ السوق في ازدياد! 💼*;
} else if (percentages > 100) {
description = *الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ محترف/ة حقيقي/ة! 💰*;
} else {
description = *الحسابات أظهرت أن ${text.toUpperCase()} هو ${percentages}% ${command}. ${emoji}*\n*-❥ دائمًا وقت الأعمال! 💼*;
}
break;
default:
throw *[❗] أمر غير صالح.*;
}
const responses = [
"تكلم الكون.",
"يؤكد العلماء ذلك.",
"مفاجأة! 🎉"
];
const response = responses[Math.floor(Math.random() * responses.length)];
const cal = `━━━━⬣ النسيه ⬣━━━━

—◉ ${description}

"${response}"

━━━━⬣ النسيه ⬣━━━━.trim(); async function loading() { var hawemod = [ "《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%" ]; let { key } = await conn.sendMessage(m.chat, {text: 🔄 جاري الحساب! 🔄`, mentions: conn.parseMention(cal)}, {quoted: m});
for (let i = 0; i < hawemod.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000));
await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(cal)}, {quoted: m});
}
await conn.sendMessage(m.chat, {text: cal, edit: key, mentions: conn.parseMention(cal)}, {quoted: m});
}
loading();
};
handler.help = ['gay2', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + ' @tag | الاسم');
handler.tags = ['calculator'];
handler.command = /^(gay2|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto)$/i;
export default handler;
