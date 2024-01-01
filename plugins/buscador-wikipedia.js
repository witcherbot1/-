import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
            if (!text) return m.reply("ابحث في ويكيبيديا\nمثال: .ويكي القوه")
            await m.reply(wait)
            try {
                let item = await Wiki(text)
                let cap = `🔍 *[ نتائج البحث ]*

📌 *العنوان :* ${item[0].judul}
📋 *ويكيبيديا :* ${item[0].wiki}
`
                await conn.sendFile(m.chat, item[0].thumb || logo, "", cap, m)
                
            } catch (e) {
                await m.reply(eror)
            }
}
handler.help = ["ويكي"]
handler.tags = ["internet"]
handler.command = /(ويكيبيديا|ويكى|معلومات|ويكي)$/i
export default handler

/* New Line */
async function Wiki(query) {
  const res = await fetch(`https://ar.m.wikipedia.org/w/index.php?search=${query}`);
  const html = await res.text();
  const $ = cheerio.load(html);
  const wiki = $('#mf-section-0').find('p').text();
  const thumb = $('#mf-section-0').find('div > div > a > img').attr('src') || '//https://telegra.ph/file/c6e93e154336db7585c98.jpg';
  const judul = $('h1#section_0').text();
  return [{ wiki, thumb: `https:${thumb}`, judul }];
}
