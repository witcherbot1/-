import fetch from 'node-fetch'
import axios from 'axios'
let timeout = 60000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
let id = m.chat
if (id in conn.tebaklagu) {
conn.reply(m.chat, '❗ لا تزال هناك اسئله بدون إجابة.', conn.tebaklagu[id][0])
throw false
} //5LTV57azwaid7dXfz5fzJu
let res = await fetchJson(`https://raw.githubusercontent.com/mohamedkun15/TheMystic-Bot-MD/master/src/JSON/Soundanime.json`)
let json = res[Math.floor(Math.random() * res.length)]    
//let res = await fetch(global.API('xteam', '/game/tebaklagu/', { id: '0ISD8mk5kiv1YC5884lISM' }, 'APIKEY'))
//if (res !== 200) throw 'Error'
//let result = await res.json()
//let json = result.result
let caption = `
تخمين الشخصيه من الصوت
❐↞┇الـوقـت⏳↞ *${(timeout / 1000).toFixed(2)} ┇
❐↞┇✍اكتب ${usedPrefix}تلميح* للحصول على تلميح*
❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇
❐↞┇أجب على هذه الرسالة بالإجابات!┇
『𝙕𝙊𝙍𝙊-𝘽𝙊𝙏』`.trim()
conn.tebaklagu[id] = [
await m.reply(caption),
json, poin,
setTimeout(() => {
if (conn.tebaklagu[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ ${json.jawaban}*┇`, conn.tebaklagu[id][0])
delete conn.tebaklagu[id]
}, timeout)
]
let aa = await conn.sendMessage(m.chat, { audio: { url: json.link_song }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json.link_song, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^cancion|تخمين$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
