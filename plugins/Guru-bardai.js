import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) throw `قول اي حاجه!`

try {

await m.reply(wait)
const { key } = await conn.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/d879cbad22d59e9f6c94d.jpg' },
      caption: 'سيبني افكر....'
    }, {quoted: m})
conn.sendPresenceUpdate('composing', m.chat);
   let res = await gpt.ChatGpt(text, syms)

var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await conn.relayMessage(m.chat, {
        protocolMessage: {
          editedMessage: {
            imageMessage: { caption: result }

} catch (error) {
console.error(error)
throw '*احا ايرور*'
}

}
handler.command = ['تست']
handler.help = ['bard']
handler.tags = ['herramientas']

handler.premium = false

export default handler
