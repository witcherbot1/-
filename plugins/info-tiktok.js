import * as fs from 'fs'

let handler = async (m, { conn, args }) => {
if(!args[0]) return m.reply('*[ ! ] Introduzca el nombre de usuario valido...*')
if (args[0].includes("https://")) return m.reply('Por favor, solo use un nombre o nickname!')
try {
let dtTiktok = await fetchJson(`https://latam-api.vercel.app/api/ustiktok?apikey=${MyApiKey}&q=${args[0]}`)
let usuario = dtTiktok.apirres
conn.sendMessage(m.chat, {document: { url: 'https://github.com/NeKosmic/NK-BOT-MD' },mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',fileName: '@NeKosmic',fileLength: 69000000000,pageCount: 999,contextInfo: {forwardingScore: 100,isForwarded: true,externalAdReply: {mediaUrl: 'https://youtu.be/Tk9Pitk1_oM',mediaType: 2,previewType: 'pdf',thumbnail: await getBuffer(usuario.logo)}},caption: '*[ INFO DE USUARIO TIKTOK ]*',buttons:[ {buttonId: `<\>`, buttonText: {displayText: `*🗣️ Usuario:* ${usuario.nombre}\n\n*⛈️ Nickname:* ${usuario.apodo}\n\n*🌎 Seguidores:* ${usuario.seguidores}\n\n_🍁 Siguiendo:* ${usuario.siguiendo}\n\n*🕊️ Descripcion:* ${usuario.descripcion}\n\n*🌤️ Link:* https://www.tiktok.com/${usuario.nombre}\n`}, type: 1}],headerType: 6 }, { quoted: m })
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['tiktok'].map(v => v + ' <usuario>')
handler.tags = ['busqueda']
handler.command = /^(tiktok|tiktokstalk)$/i
handler.limit = true

export default handler
