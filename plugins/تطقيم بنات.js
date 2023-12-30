import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://gist.githubusercontent.com/YosefZoro1/ceced524f1f4dac896a800509dd8c114/raw/ff81a9819cbb1470d4949623b2f86d91cbae51ab/gairl.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]

  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '*بنت*👧🏻', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '*بنت*👧', m)
}
handler.help = ['Miku bot']
handler.tags = ['Miku bot']
handler.command = /^طقم-بنات|طقم1$/i
handler.limit = true

export default handler
