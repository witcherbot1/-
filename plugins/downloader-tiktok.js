import fg from 'api-dylux';
import axios from 'axios';
import cheerio from 'cheerio';
import {tiktok} from '@xct007/frieren-scraper';
import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import {tiktokdl} from '@bochilteam/scraper';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  if (!text) throw `*[❗اخطار❗] الرجاء إدخال رابط TikTok للحصول على محتوى الفيديو، مثال: "${usedPrefix + command}* https://www.tiktok.com/@ox__zoro__ox/video/7291507684912811270?is_from_webapp=1&sender_device=pc&web_id=7303245995318609414`;
  if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[❗اخطار❗] الرجاء إدخال رابط TikTok صالح للحصول على محتوى الفيديو، مثال: "${usedPrefix + command}* https://www.tiktok.com/@ox__zoro__ox/video/7291507684912811270?is_from_webapp=1&sender_device=pc&web_id=7303245995318609414`;
const { key } = await conn.sendMessage(m.chat, {text: `⌛ _جاري التحميل..._\n▰▰▰▱▱▱▱▱▱\nيتم استخراج مقطع الفيديو من TikTok 🔰`}, {quoted: fkontak});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `⌛ _جاري التحميل..._\n▰▰▰▰▰▱▱▱▱\nيتم استخراج مقطع الفيديو من TikTok 🔰`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `⌛ _جاري التحميل..._\n▰▰▰▰▰▰▰▱▱\nيتم استخراج مقطع الفيديو من TikTok 🔰`, edit: key});
await conn.sendMessage(m.chat, {text: `⌛ _جاري التحميل..._\n▰▰▰▰▰▰▰▰▰\nيتم استخراج مقطع الفيديو من TikTok 🔰`, edit: key});
const texto = `*[❗] @${m.sender.split`@`[0]} أرسلت طلبًا للحصول على محتوى TikTok. يُرجى الانتظار قليلاً.*`;
  // let buttons = [{ buttonText: { displayText: '♫ 𝙰𝚄𝙳𝙸𝙾 ♫' }, buttonId: `${usedPrefix}tomp3` }]
  try {
    const aa = {quoted: m, userJid: conn.user.jid};
    const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: texto, contextInfo: {externalAdReply: {title: '𝑍𝑂𝑅𝑂⚡𝐵𝑂𝑇', body: null, thumbnail: imagen1, sourceUrl: 'https://solo.to/yosef.zoro'}, mentionedJid: [m.sender]}}}, aa);
    await conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id, mentions: [m.sender]});
    const dataF = await tiktok.v1(args[0]);
    // let desc1 =  `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${dataF.nickname || 'Indefinido'}`
    const desc1 = `*أولا! 🌟*\n*📽️ هذا الفيديو من TikTok.*\n\n*اطلب من تريد تحويل الفيديو إلى صوت، ويمكنك الرد بسهولة على الفيديو باستخدام الأمر #لصوت 🎧.*`;
    await conn.sendMessage(m.chat, {video: {url: dataF.play}, caption: desc1}, {quoted: m});
  } catch (e1) {
    try {
      const tTiktok = await tiktokdlF(args[0]);
      // let desc2 = `🔗 *Url:* ${tTiktok.video}`
      const desc2 = `*أولا! 🌟*\n*📽️ هذا الفيديو من TikTok.*\n\n*اطلب من تريد تحويل الفيديو إلى صوت، ويمكنك الرد بسهولة على الفيديو باستخدام الأمر #لصوت 🎧.*`;
      await conn.sendMessage(m.chat, {video: {url: tTiktok.video}, caption: desc2}, {quoted: m});
    } catch (e2) {
      try {
        const p = await fg.tiktok(args[0]);
        // let te = `*الاسم:* ${p.author || 'Indefinido'}`
        const te = `*أولا! 🌟*\n*📽️ هذا الفيديو من TikTok.*\n\n*اطلب من تريد تحويل الفيديو إلى صوت، ويمكنك الرد بسهولة على الفيديو باستخدام الأمر #لصوت 🎧.*`;
        await conn.sendMessage(m.chat, {video: {url: p.nowm}, caption: te}, {quoted: m});
      } catch (e3) {
        try {
          const {author: {nickname}, video, description} = await tiktokdl(args[0]);
          const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;
          // let cap = `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${nickname || 'Indefinido'}`
          const cap = `*أولا! 🌟*\n*📽️ هذا الفيديو من TikTok.*\n\n*اطلب من تريد تحويل الفيديو إلى صوت، ويمكنك الرد بسهولة على الفيديو باستخدام الأمر #لصوت 🎧.*`;
          await conn.sendMessage(m.chat, {video: {url: url}, caption: cap}, {quoted: m});
        } catch {
          throw `*[❗] لا يمكن الحصول على المحتوى. يرجى المحاولة مرة أخرى.*`;
        }
      }
    }
  }
};
handler.command = /^(تيك|ttdl|تيك|tiktoknowm|tt|ttnowm|tiktokaudio)$/i;
export default handler;

async function tiktokdlF(url) {
  if (!/tiktok/.test(url)) return 'Enlace incorrecto';
  const gettoken = await axios.get('https://tikdown.org/id');
  const $ = cheerio.load(gettoken.data);
  const token = $('#download-form > input[type=hidden]:nth-child(2)').attr( 'value' );
  const param = {url: url, _token: token};
  const {data} = await axios.request('https://tikdown.org/getAjax?', {method: 'post', data: new URLSearchParams(Object.entries(param)), headers: {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36'}});
  const getdata = cheerio.load(data.html);
  if (data.status) {
    return {status: true, thumbnail: getdata('img').attr('src'), video: getdata('div.download-links > div:nth-child(1) > a').attr('href'), audio: getdata('div.download-links > div:nth-child(2) > a').attr('href')};
  } else {
    return {status: false};
  }
}
