import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  if (!text) throw `*[❗اشعار❗] يجب إدخال اسم الأغنية أو الفنان للبحث عنه في SoundCloud*`;
  try {
    const res = await fetch(`https://api-v2.soundcloud.com/search/tracks?q=${text}&client_id=iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX`);
    const json2 = await res.json();
    let permalinkUrl;
    if (json2.collection.length > 0) {
      const randomIndex = Math.floor(Math.random() * json2.collection.length);
      const randomObject = json2.collection[randomIndex];
      permalinkUrl = randomObject.permalink_url;
    } else {
      permalinkUrl = await json2.collection[0].permalink_url;
    }
    const res2 = await fetch(`https://api.akuari.my.id/downloader/scdl?link=${permalinkUrl}`);
    const json = await res2.json();
    const shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.link}`)).text();
    const soundcloudt = `❒═══❬ 𝐒𝐎𝐔𝐍𝐃𝐂𝐋𝐎𝐔𝐃 ❭═══╾❒
┬
├‣✨ *العنوان:* ${json.title}
┴
┬
├‣💚 *رابط المصدر:* ${shortUrl}
┴
┬
├‣ *- جاري التشغيل...*
├‣ _𝑍𝑂𝑅𝑂⚡3𝑀𝐾_
┴`;
    await conn.sendFile(m.chat, json.thumb, '', soundcloudt, m);
    await conn.sendMessage(m.chat, {audio: {url: json.link}, fileName: `${json.title}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch {
    throw '*[❗اشعار❗] حدث خطأ أثناء جلب الأغنية من SoundCloud، يرجى المحاولة مرة أخرى لاحقًا*';
  }
};
handler.command = /^(ساوند-كلاب|cover)$/i;
export default handler;
