import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://gist.githubusercontent.com/YosefZoro1/a1d19e37067218668259dcc296062e5a/raw/edcb7eed250c5cb116fcff36ece415d71b19fc41/copuls.json')).json()
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
