const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    'open': 'not_announcement',
    'close': 'announcement',
    'فتح': 'not_announcement',
    'غلق': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
*[❗] معلمات غير صحيحة!!*

*┏━━━❲ ✨مثال✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} فتح*
*┠┉↯ ${usedPrefix + command} غلق*
`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply('*[ ✔ ] تم تحديث إعدادات المجموعة بنجاح*');}
};
handler.help = ['group open / close', 'جروب فتح / غلق'];
handler.tags = ['group'];
handler.command = /^(group|اعدادات|جروب)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
