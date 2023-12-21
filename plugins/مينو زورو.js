import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Kolkata').format('HH')
let wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات`
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
🚀 *_استعد ${name}، ${greeting}! سنخوض مغامرة!_* 🚀

📜 *_اقتباس اليوم: ${quote}_* 📜

┏━💼 _معلومات المستخدم:_ 💼━┓
┃ 👾  *تاق المستخدم:* ${taguser} 
┃ 🎩  *الاسم:* ${name} 
┃ 🦸  *رئيس ذكاء:* ${author} 
┃ 💎  *الألماس:* ${diamond} 
┃ 🏆  *الرتبة:* ${role}
┃ 🎮  *الخبرة:* ${exp} 
┗━━━━━━━━━━━┛

┏━━⏰ _الصلصة اليومية!_ ⏰━┓
┃ 📆  *تاريخ اليوم:* ${date} 
┃ ⏲️  *الوقت الحالي:* ${wib} 
┗━━━━━━━━━━━━━┛

┏━━🤖 _حالة البوت:_🤖━━┓
┃ 🤡  *اسم البوت:* ${botname} 
┃ 💻  *المنصة:* لينكس 
┃ 📣  *البادئة:* ${usedPrefix} 
┃ 🕓  *وقت التشغيل:* ${uptime}
┃ 💌  *قاعدة البيانات:* ${rtotalreg} من ${totaluser} 
┃ 📚  *إجمالي المستخدمين:* ${totaluser} 
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< إعدادات البوت >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣➤ الرسائل في الانتظار
┣ ඬ⃟ ⚡ *.صلح*
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< قسم المعلومات >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟👨🏻‍💻 *.المطور*
┣ ඬ⃟🔒 *.الخصوصيه*
┣ ඬ⃟🚄 *.بنج*
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< قسم الاوامر >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟🌞 *اذكار الصباح*
┣ ඬ⃟➥『يجيبلك اذكار الصباح』
┣ ඬ⃟🌙 *اذكار المساء*
┣ ඬ⃟➥『يجيبلك اذكار المساء』
┣ ඬ⃟🤖 *gpt*
┣ ඬ⃟➥『chatgpt اسأله اي سؤال』
┣ ඬ⃟📢 *مهم*
┣ ඬ⃟➥『يعمل منشن خفي للمطور』
┣ ඬ⃟🌧️ *الطقس*
┣ ඬ⃟➥『يجيبلك الطقس (اكتب اسم البلد ب الانجليزيه)』
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< قسم الجروبات >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟🆙 *رفع*
┣ ඬ⃟➥『رفع عضو لمشرف』
┣ ඬ⃟🔻 *خفض*
┣ ඬ⃟➥『خفض مشرف لعضو』
┣ ඬ⃟🔗 *رستر*
┣ ඬ⃟➥『اعاده تعين لرابط الجروب』
┣ ඬ⃟📣 *منشن*
┣ ඬ⃟➥『يمنشن لجميع الاعضاء』
┣ ඬ⃟👮 *المشرفين*
┣ ඬ⃟➥『يجيبلك مشرفين الجروب (في الحالات الطارئة فقط)』
┣ ඬ⃟🏘 *الجروب* 
┣ ඬ⃟➥『يجيبلك معلومات الجروب』
┣ ඬ⃟🔗 *لينك*
┣ ඬ⃟➥『يجيب لينك الجروب』
┣ ඬ⃟👻 *مخفي*
┣ ඬ⃟➥『منشن وهمي』
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< قسم التحويلات >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟🎈 *ملصق*
┣ ඬ⃟➥『تحويل الصوره لملصق - استيكر』
┣ ඬ⃟🎁 *ستك*
┣ ඬ⃟➥『الحصول علي ملصق  بالكلمات』
┣ ඬ⃟🚨 *سرقه*
┣ ඬ⃟➥『سرقه الملصق وتخليه بحقوقك』
┣ ඬ⃟🎭 *دمج* 
┣ ඬ⃟➥『دمج الايموجي وتكوين استيكر 』
┣ ඬ⃟📷 *تليجراف* 
┣ ඬ⃟➥『رفع الصور والفديوهات الى تليجراف』
┣ ඬ⃟🌅 *لصوره* 
┣ ඬ⃟➥『تحويل الملصق لصوره』
┣ ඬ⃟🎥 *لفيديو* 
┣ ඬ⃟➥『تحويل الملصق المتحرك لفديو 』
┣ ඬ⃟🗣 *انطق* 
┣ ඬ⃟➥『تحويل النص الى كلام 』
┣ ඬ⃟📝 كود
┣ ඬ⃟➥『البوت يصنع باركود 』
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< قسم الألعاب >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟❓ *سؤال*
┣ ඬ⃟➥『اسأل أسئلة عشوائية للتسلية مع الأصدقاء』
┣ ඬ⃟❓ *لو*
┣ ඬ⃟➥『لعبة "لو خيروك" للتسلية مع الأصدقاء』
┣ ඬ⃟❓ *انمي*
┣ ඬ⃟➥『أسئلة حول الأنمي للتسلية』
┣ ඬ⃟❌ *اكس_او*
┣ ඬ⃟➥『لعبة أكس أو مع الأصدقاء』
┣ ඬ⃟😊 *ايموجي*
┣ ඬ⃟➥『تخمين الشخصية من الإيموجي』
┣ ඬ⃟🔤 *احرف*
┣ ඬ⃟➥『حصول على حروف لأسماء عشوائية』
┣ ඬ⃟🥊 *تحدي*
┣ ඬ⃟➥『لعبة حجر ورقة مقص مع البوت』
┣ ඬ⃟💡 *نصيحة*
┣ ඬ⃟➥『ينصحك البوت بنصيحة عشوائية』
┣ ඬ⃟🤐 *صراحة*
┣ ඬ⃟➥『طرح أسئلة والإجابة بصراحة مع الأصدقاء』
┣ ඬ⃟🧩 *فزورة*
┣ ඬ⃟➥『أسئلة فوازير للتسلية』
┣ ඬ⃟🇪🇬 *علم*
┣ ඬ⃟➥『أسئلة عامة حول العلوم والمعرفة』
┣ ඬ⃟🕵️ *احزر*
┣ ඬ⃟➥『تخمين شخصيات الأنمي من الصور』
┣ ඬ⃟📚 *حديث*
┣ ඬ⃟➥『إرسال أحاديث دينية』
┣ ඬ⃟👁 *عين*
┣ ඬ⃟➥『عرض صور عيون شخصيات الأنمي』
┣ ඬ⃟🎲 *نرد*
┣ ඬ⃟➥『لعبة النرد مع الأصدقاء』
┣ ඬ⃟🤔 *خمن*
┣ ඬ⃟➥『وصف وتخمين شخصيات الأنمي』
┣ ඬ⃟📝 *كت*
┣ ඬ⃟➥『لعبة الكتابة للتسلية مع الأصدقاء』
┣ ඬ⃟🔠 *فكك*
┣ ඬ⃟➥『الحصول على كلمة يمكن تفكيكها』
┣ ඬ⃟🔡 *رتب*
┣ ඬ⃟➥『حروف مبعثرة يمكن ترتيبها』
┣ ඬ⃟👑 *تاج*
┣ ඬ⃟➥『اقتراح منشن للتنميش مع الأصدقاء』
┣ ඬ⃟💑 *تطقيم*
┣ ඬ⃟➥『إرسال صور تطقيم لشخصيات أنمي』
┣ ඬ⃟💍 *زواج*
┣ ඬ⃟➥『زواج اثنين عشوائي من الجروب』
┣ ඬ⃟💔 *طلاق*
┣ ඬ⃟➥『طلاق اثنين عشوائي من الجروب』
┣ ඬ⃟🤝 *صداقة*
┣ ඬ⃟➥『صداقة اثنين عشوائي من الجروب』
┣ ඬ⃟🙋 *تحداني*
┣ ඬ⃟➥『اقتراح تحديات للقيام بها』
┣ ඬ⃟🏆 *توب*
┣ ඬ⃟➥『عرض أفضل عشرة أعضاء في الجروب』
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< قسم الترفيه >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟🖼 *لكرتون*
┣ ඬ⃟➥『يحول صورك لكرتون مع تحويل الوجه لاستيكر』
┣ ඬ⃟🔊 *صوت-انمي*
┣ ඬ⃟➥『يجيبلك اصوات انمي ( 1 : 18 ) اصوات』
┣ ඬ⃟🎞 *ايديت*
┣ ඬ⃟➥『البوت يرسل ايديت ل زورو』
┣ ඬ⃟🎞 *ايديت2*
┣ ඬ⃟➥『البوت يرسل ايديت من انمي عشوائي』
┣ ඬ⃟🎁 *زخرفه*
┣ ඬ⃟➥『اكثر من زخرفه انجليزي بس』
┣ ඬ⃟🎀 *زغرفه*
┣ ඬ⃟➥『زخرفه الكلمات للاسف الانجليزي بس』
┣ ඬ⃟🌆 *خلفيات*
┣ ඬ⃟➥『يرسل خلفيه انمي』
┣ ඬ⃟ ♨️ *خسرت*
┣ ඬ⃟➥『يرسل صورتك مكتوب عليها خاسر زي gta』
┣ ඬ⃟🐱 *قط* 
┣ ඬ⃟➥『صور لقطط عشوائيه』
┣ ඬ⃟⚽ *ميسي*
┣ ඬ⃟➥『يجيب صور لعمك ميسي』
┣ ඬ⃟⚽ الدون
┣ ඬ⃟➥『يجيب صور للدون』
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< قسم التحميل و البحث>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟🔎 *بحث*
┣ ඬ⃟➥『البحث فجوجل』
┣ ඬ⃟📷 *صوره*
┣ ඬ⃟➥『الحصول علي صوره من جوجل 』
┣ ඬ⃟🌀 *انمي* 
┣ ඬ⃟➥『يجيبلك معلومات عن الانمي ال عايزه』
┣ ඬ⃟🌅 *خلفيه*
┣ ඬ⃟➥『ابحث عن الخلفيه اكتب الاسم انجلش』
┣ ඬ⃟🙏 *ايه* 
┣ ඬ⃟➥『ايه الكرسي 』
┣ ඬ⃟🎵 *تيك* 
┣ ඬ⃟➥『ينزل فيديو من التيك توك بدون علامه مائيه 』
┣ ඬ⃟✨ *صور* 
┣ ඬ⃟➥『ينزل صور من التيك توك بدون علامه مائيه』
┣ ඬ⃟🎧 *شغل* 
┣ ඬ⃟➥『يجيبلك اي اغنيه عايزها』
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< قسم المطور >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟🚷 *بان*
┣ ඬ⃟➥『حظر شخص من استخدام البوت』
┣ ඬ⃟🚪 *بلوك*
┣ ඬ⃟➥『البوت يعمل لشخص بلوك』
┣ ඬ⃟🚪 *رفع-البلوك*
┣ ඬ⃟➥『البوت يشيل البلوك』
┣ ඬ⃟🚀 *انضم*
┣ ඬ⃟➥『البوت ينضم لجروبات عن طريق الرابط』
┣ ඬ⃟🚶*اخرج*
┣ ඬ⃟➥『البوت يخرج من الجروبات』
┣ ඬ⃟🚫 *البلوكات*
┣ ඬ⃟➥『الاشخاص الي واخدين بلوك من البوت』
┣ ඬ⃟ ⛔ *حظر*
┣ ඬ⃟➥『حظر جروب من استعمال البوت』
┣ ඬ⃟ 🔓 *unbanchat*
┣ ඬ⃟➥『الغاء حظر جروب』
*┗━━━━━━━━━━━━━━━━┛*`

const vi = ['https://telegra.ph/file/91ba954ced01bf270477a.mp4',
'https://telegra.ph/file/91ba954ced01bf270477a.mp4',
'https://telegra.ph/file/91ba954ced01bf270477a.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch {
    conn.reply(m.chat, '*[ ℹ️ ] هذه القائمة بها خطأ داخلي ولهذا لم يكن من الممكن إرسالها.*', m);
  }
};
handler.command = /^(مينيو|اوامر|الاوامر|الأوامر|أوامر|\?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
