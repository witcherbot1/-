let handler = async (m, { conn, usedPrefix }) => {
  try {
    let quotesData = await (await fetch("https://raw.githubusercontent.com/Dark-Man747/worker-bot/main/quote.json")).json()
    const randomIndex = quotesData[Math.floor(Math.random() * quotesData.length)]
    const message = `*· • • ━━ ⌝الاقتباس⌞ ━━ • •*\n\n*『${randomIndex}』*`

    await conn.reply(m.chat, message, m)
  } catch (e) {
    console.log(e)
    await conn.reply(m.chat, 'حدث خطأ أثناء استرجاع الاقتباس.', m)
  }
}
handler.command = ['اقتباس','أقتباس','اقتباسات','الاقتباسات']
handler.tags = ['اقتباس']
handler.help = ['اقتباس عشوائي']
export default handler