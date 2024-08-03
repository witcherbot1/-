let timeout = 30000
let poin = 3999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tokitoki = conn.tokitoki ? conn.tokitoki : {}
    let id = m.chat
    if (id in conn.tokitoki) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tokitoki[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/ze819/game/master/src/game.js/luffy1.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*❰❖── ~『𝙍𝙊𝘽 🔰-𝐵𝛩𝑇』~──❖❱*\n *•┇❖↞استخدم انسحب للانسحاب┇🇸🇦❯*
 *•┃❖↞الـوقـت⏳↞* *${(timeout / 1000).toFixed(2)}* *ثانية┇❯*
  
 *•┃❖↞الـجـائـزة💰↞* *${poin}* *نقطه┇❯*
   *❰❖── ~『𝙍𝙊𝘽 🔰-𝐵𝛩𝑇』~──❖❱*
     `.trim()
    conn.tokitoki[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tokitoki[id]) conn.reply(m.chat, `*❮ ⌛┇انتــهــى الــوقــت┇⌛❯*\n*❖↞┇الاجـابـة✅↞*  *${json.name}* *┇❯*`, conn.tokitoki[id][0])
            delete conn.tokitoki[id]
        }, timeout)
    ]
}
handler.help = ['guesseye']
handler.tags = ['game']
handler.command = /^علم$/i

export default handler
