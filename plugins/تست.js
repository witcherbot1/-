import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://gist.githubusercontent.com/YosefZoro1/41e80f742a04cbac0b82c838a2f9570d/raw/2d76480d96fc9c90254ae431f2ce005947f9afbb/edit.json`).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*𝑬𝑫𝑰𝑻 𝑩𝒀 𝙍𝙊𝘽 🔰*`, m)}

handler.help = ['𝙍 𝙊 𝘽']
handler.tags = ['𝙍 𝙊 𝘽']
handler.command = /^(ايديت)$/i
export default handler
