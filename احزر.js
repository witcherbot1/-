let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/mohamedkun15/TheMystic-Bot-MD/master/src/JSON/Manga.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*╭━━━[ ${command.toUpperCase()} ]━━━━⬣*
┃❐↞┇الـوقـت⏳↞ *${(timeout / 1000).toFixed(2)} ┇
  *🦦لو مش عارف الاجابه قول استخدم.معرفش*
  ❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇
‌⎔ ━ • 𓆩♕𝙎𝙃𝙄𝙆𝘼🐥ᵇᵒᵗ♕𓆪• ━ ⎔
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ ${json.name}*┇`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['احزر']
handler.tags = ['game']
handler.command = /^احزر/i

export default handler
