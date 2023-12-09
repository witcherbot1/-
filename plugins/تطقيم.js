import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://gist.githubusercontent.com/YosefZoro1/fbc7827b7e019e72984b61c4cd18a010/raw/6558a5ccd44655cf586b8fd49bcccf54b4f83bf3/copul.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', ' رقم المطور +201144984146 ولد ♂️', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', 'رقم المطور +201144984146♀️بنت', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['t2m']
handler.command = ['طقم','تطقيم'] 


export default handler
