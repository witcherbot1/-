//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        m.reply(`
🌟 *مبروك!* 🌟
تمت إرتقاؤك إلى المستوى *${user.level}*! 🚀

*${before}* كان المستوى القديم، والآن أنت في المستوى *${user.level}*! 🌠

*${user.role}* أصبح دورك الجديد! 🛡️

⚡استمر في العمل الجاد والتفاعل مع زورو لتصبح أقوى! 💪
	`.trim())
    }
}
