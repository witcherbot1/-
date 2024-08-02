import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Africa/Egypt').format('HH')
let wib = moment.tz('Africa/Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات`
let vn = './media/Madara.mp3'
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[who]
let {money, joincount} = global.db.data.users[m.sender];
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let rtotal = Object.entries(global.db.data.users).length || '0'
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
global.fcontact = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    m.react('🔍')
    let videoUrl = 'https://telegra.ph/file/943cf241bd82ac7e24e18.mp4'
    const str = `
 *⎔ ━─ ─ ╎⊱ ‹🔰› ⊰ ╎─ ─━ ⎔*

*"${taguser} مـرحـبـا"*

*◈┆ قائمة اوامر البحث┊📜 ┆↶*

*🔍┊↵فيديو」*
*🔍┊↵ويكيبيديا」*
*🔍┊↵مانجا」*
*🔍┊↵الطقس」*

◜◈ 𝑩𝑶𝑻 ╎ 𝙍𝙊𝘽 🔰◞
*⎔ ━─ ─ ╎⊱ ‹🔰› ⊰ ╎─ ─━ ⎔*`
    const { result, key, timeout } = await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: str.trim(),  gifPlayback: true,
  gifAttribution: 0}, { quoted: fcontact })
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['7', '7','7','7'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Asia/Kolkata').format('HH')
      let res = "صباح الفل ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء النور 🌇"
      }
      if (time >= 18) {
        res = "تصبح على خير 🌙"
      }
      return res
    }
