const handler = async (m, {conn, args, participants}) => {
  const users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key};
  });
  const sortedExp = users.map(toNumber('exp')).sort(sort('exp'));
  const sortedLim = users.map(toNumber('limit')).sort(sort('limit'));
  const sortedLevel = users.map(toNumber('level')).sort(sort('level'));
  const usersExp = sortedExp.map(enumGetKey);
  const usersLim = sortedLim.map(enumGetKey);
  const usersLevel = sortedLevel.map(enumGetKey);
  const len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length);
  const adventurePhrases = [
  "قدِّم القيادة في المغامرة وصقل طريقك نحو القمة.",
    "تحدي المجهول ووصل إلى ارتفاعات جديدة!",
    "شجاعتك سترشدك إلى قمة جدول التصنيف.",
    "في كل خطوة، نحت أسطورتك في هذه المغامرة العظيمة.",
    "استكشف وتنافس وأثبت عظمتك في هذا الجدول.",
    "كل خطوة تحسب في رحلتك نحو قمة الترتيب.",
    "إثارة التنافس تدفعك للأمام.",
    "اختر وتغلب على الأماكن الأولى بإصرارك.",
];
  const randomAdventurePhrase = adventurePhrases[Math.floor(Math.random() * adventurePhrases.length)];
  const texto = `
*< جدول أبرز المغامرين />*
    
—◉ *أفضل ${len} خبرة 🌟*
*👤 موقعك:* ${usersExp.indexOf(m.sender) + 1} من ${usersExp.length}

${sortedExp.slice(0, len).map(({jid, exp}, i) => `${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} نقاط خبره*`).join`\n`}

—◉ *أفضل ${len} ألماس 💎*
*👤 موقعك:* ${usersLim.indexOf(m.sender) + 1} من ${usersLim.length}

${sortedLim.slice(0, len).map(({jid, limit}, i) => `${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} الماس*`).join`\n`}

—◉ *أفضل ${len} مستوى 🎚️*
*👤 موقعك:* ${usersLevel.indexOf(m.sender) + 1} من ${usersLevel.length}

${sortedLevel.slice(0, len).map(({jid, level}, i) => `${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *المستوي ${level}*`).join`\n`}

*⚔️ ${randomAdventurePhrase} ⚔️*`.trim();
  conn.sendMessage(m.chat, {text: texto, mentions: conn.parseMention(texto)}, {quoted: m})
};
handler.help = ['top'];
handler.tags = ['xp'];
handler.command = ['ترتيب', 'تصنيف'];
handler.fail = null;
export default handler;

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) {
    return (a, i, b) => {
      return {...b[i], [property]: a[property] === undefined ? _default : a[property]};
    };
  } else return (a) => a === undefined ? _default : a;
}

function enumGetKey(a) {
  return a.jid;
}
