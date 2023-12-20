import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*[❗] استخدم هذا الأمر مباشرة في الرقم الرئيسي للبوت*'}, {quoted: m});
  }
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = './MysticSession/';
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*[❗] لم يتم العثور على أي ملف يتضمن معرف الدردشة*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*[❗] تمت ازالة ${filesDeleted} ملفات من الجلسة*`}, {quoted: m});
    }
  } catch (err) {
    console.error('Error al leer la carpeta o los archivos de sesión:', err);
    await conn.sendMessage(m.chat, {text: '*[❗] حدث خطأ في إزالة أرشيفات الجلسة*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*👋 *👋 ¡مرحبا! ياصديقي?*

*[❗] إذا لم يقم البوت بالرد على أوامرك بسبب التشفير او في انتظار الرسالة فيجب كتابة لأمر ادناه*

*—◉ المثال:*
.ds
.ds
.ds*—◉ Ejemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['fixmsgespera'];
handler.tags = ['fix'];
handler.command = /^(صلح|ds)$/i;
export default handler;
