/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*[❗] استخدم هذا الأمر مباشرة على رقم الهاتف الرئيسي للبوت*'}, {quoted: m});
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
      await conn.sendMessage(m.chat, {text: '*[❗] لم يتم العثور على أي ملف يحتوي على معرف الدردشة*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*[❗] تم حذف ${filesDeleted} ملفات جلسة*`}, {quoted: m});
    }
  } catch (err) {
    console.error('حدث خطأ أثناء قراءة مجلد أو ملفات الجلسة:', err);
    await conn.sendMessage(m.chat, {text: '*[❗] حدث خطأ أثناء حذف ملفات الجلسة*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*👋 مرحبًا! هل تراني الآن؟*\n\n*[❗] إذا لم يستجب البوت لأوامرك، يرجى إجراء إرسال رسائل قليلة*\n\n*—◉ مثال:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['fixmsgespera'];
handler.tags = ['fix'];
handler.command = /^(صلح|ds)$/i;
export default handler;
