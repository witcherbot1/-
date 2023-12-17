import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*[❗] الرجاء إدخال اسم التطبيق الذي تريد البحث عنه.*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `* منزل التطبيقات📲\n\n📌 *الاسم:* ${data5.name}\n📦 *الحزمه:* ${data5.package}\n🕒 *اخر تحديث:* ${data5.lastup}\n📥 *الحجم:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] الملف كبير جدًا ولن يتم إرساله.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*[❗] خطأ، لم يتم العثور على نتائج لبحثك.*`;
  }    
};
handler.command = /^(ابك-مود|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
