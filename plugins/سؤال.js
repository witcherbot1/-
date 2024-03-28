import fs from 'fs'

let timeout = 60000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, '*⧉┊↵ هناك سؤال لم يتم الاجابة عليه، ايها الفاشل ❌ 」*', conn.tekateki[id][0])
        throw false
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/انمي.json`))
    let json = tekateki[Math.floor(Math.random() * tekateki.length)]
    let _clue = json.response
    let clue = _clue.replace(/[A-Za-z]/g, '_')
    let caption = `
    *⎔ ━─ ─ ╎⊱ ‹🎐› ⊰ ╎─ ─━ ⎔*
    *〄┋الـسـؤال ⁉️ ⇇〘${json.question}〙*

*↲الـوقـت 🧭 ⇇〘 ${(timeout / 1000).toFixed(2)}〙*
*↲الـجـائـزة 🪙  ⇇〘 ${poin} نـقـاط〙*

◜◈ 𝑩𝑶𝑻 ╎𝑺𝑯𝑰𝑵𝑶𝑩𝑼 🎻◞
*⎔ ━─ ─ ╎⊱ ‹🎐› ⊰ ╎─ ─━ ⎔*
`.trim()
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `*⌛انتهي الوقت⌛*\n *الاجـابـة✅ ${json.response}*`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}

handler.help = ['acertijo']
handler.tags = ['game']
handler.command = /^(سؤال_انمي|سؤال)$/i

export default handler
