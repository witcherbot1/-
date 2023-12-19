import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*[❗ملاحظه❗] الرجاء الرد على الملصق لإضافة حقوقك إليه*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*[❗ملاحظه❗] يرجى الرد على الملصق الذي تريد سرقة حقوقه*'
let img = await m.quoted.download()
if (!img) throw '*[❗ملاحظه❗] يرجى الرد على الملصق الذي تريد سرقة حقوقه*'
stiker = await addExif(img, packname || global.packname, author || global.author)
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*[❗ملاحظه❗] لا يوجد ملصق، الرجاء إرسال صورة واستخدام أمر سرقه لإضافة حقوق النمط واسم الملصق*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^سرقه|اسرق|حقوق$/i
export default handler
