let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let too = `[❗] اعمل لوجو ناروتو\n\n *مـثــال* :\n*${usedPrefix + command}* ZORO`

  if (!text) throw too
  let lr = (`https://shizoapi.onrender.com/api/photooxy/naruto?text=${encodeURIComponent(text)}&apikey=shizo`)
  conn.sendFile(m.chat, lr, 'Zoro.png', `تم بواسطه ✅
  𝑍𝑂𝑅𝑂⚡3𝑀𝐾`, m)
}
handler.help = ['Zoro']
handler.tags = ['Zoro']
handler.command = ['نارو','لوجو-ناروتو']

export default handler
