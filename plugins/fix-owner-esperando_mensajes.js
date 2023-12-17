/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*[❗] استخدم هذا الأمر مباشرةً على رقم الهاتف الرئيسي للبوت.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: '*[❗] بدء عملية حذف جميع ملفات الجلسة، باستثناء ملف creds.json...*'}, {quoted: m});
  const sessionPath = './MysticSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, {text: '*[❗]مجلد غير موجود.*'}, {quoted: m});
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*[❗] لم يتم العثور على أي ملف لحذفه في مجلد.*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*[❗] تم حذف ${filesDeleted} ملفات الجلسة، باستثناء ملف creds.json.*`}, {quoted: m});
    }
  } catch (err) {
    console.error('حدث خطأ أثناء قراءة المجلد أو ملفات الجلسة:', err);
    await conn.sendMessage(m.chat, {text: '*[❗] حدث خطأ أثناء حذف ملفات الجلسة.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*مرحبًا! هل تراني الآن؟*\n\n*[❗] إذا لم يستجب الروبوت لأوامرك، أرسل له رسائل عشوائيًا قليلاً.*\n\n*—◉ مثال:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(صلح-مشفر|dsowner|clearallsession)$/i;
handler.rowner = true
export default handler;
