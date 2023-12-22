import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) throw `قول اي حاجه!`

try {

await m.reply(wait)
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

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
