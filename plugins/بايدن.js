let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let too = `[❗] افصل النص يحب بـ *+*\n\n *مـثــال* :\n*${usedPrefix + command}* زورو معانا+زورو ضايع`

  if (!text) throw too
  let lr = (`https://api.popcat.xyz/biden?text=${encodeURIComponent(text)}`)
  conn.sendFile(m.chat, lr, 'drake.png', `تم بواسطه ✅
  𝑍𝑂𝑅𝑂⚡3𝑀𝐾`, m)
}
handler.help = ['drake']
handler.tags = ['maker']
handler.command = ['بايدن','meme']

export default handler
