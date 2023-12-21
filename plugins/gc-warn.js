
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ قم بوسم أو منشن شخص ما\n\n📌 مثال : ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `✳️ المستخدم غير موجود في قاعدة بياناتي`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *تحذير للمستخدم* ⚠️

▢ *الأدمن:* ${name}
▢ *المستخدم:* @${who.split`@`[0]}
▢ *عدد التحذيرات:* ${warn + 1}/${war}
▢ *السبب:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *تحذير* ⚠️
لقد تلقيت تحذيرًا من أدمن

▢ *عدد التحذيرات:* ${warn + 1}/${war} 
إذا حصلت على *${war}* تحذيرات ستتم إزالتك تلقائيًا من المجموعة`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ تجاوز المستخدم عدد التحذيرات المسموح به *${war}* وسيتم إزالته`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`🚯 لقد تم إزالتك من المجموعة *${groupMetadata.subject}* لأنك تلقيت *${war}* تحذيرات`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['انذار'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
