import { canLevelUp, xpRange } from '../lib/levelling.js';

let handler = async (m, { conn }) => {
    let name = conn.getName(m.sender);
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/d37b343ee8f981be6ffba.jpg');
    let user = global.db.data.users[m.sender];
    let background = 'https://telegra.ph/file/d37b343ee8f981be6ffba.jpg'; 

    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier);
        let txt = `
┌───⊷ *الـــرانـــك*
⌯ الاسـم : *${name}*
⌯ الـلـفل : *${user.level}*
⌯ الـخبـرة : *${user.exp - min}/${xp}*
⌯ التصنيف : *${user.role}*
└──────────────

⌯ ${name} تحتاج الي *${max - user.exp}* خبرة للارتقاء الي مستوي جديد 🚀
`.trim();

        try {
            let imgg = `https://wecomeapi.onrender.com/rankup-image?username=${encodeURIComponent(name)}&currxp=${user.exp - min}&needxp=${xp}&level=${user.level}&rank=${encodeURIComponent(pp)}&avatar=${encodeURIComponent(pp)}&background=${encodeURIComponent(background)}`;
            conn.sendFile(m.chat, imgg, 'level.jpg', txt, m);
        } catch (e) {
            m.reply(txt);
        }
    } else {
        let str = `
┌─⊷ *الـمـسـتـوي*
⌯ المستوي السابق : *${user.level - 1}*
⌯ المستوي الحالي : *${user.level}*
⌯ التصنيف : *${user.role}*
└──────────────

Woo-hoo, ${name}! You've soared to new heights and reached level ${user.level}! 🎉 Time to celebrate! 🎊
Your newfound power will strike fear into the hearts of trolls, and the bots will bow before your command! Keep up the incredible work, and who knows what epic adventures await you next! 🌟
`.trim();

        try {
            let img = `https://wecomeapi.onrender.com/levelup-image?avatar=${encodeURIComponent(pp)}`;
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m);
        } catch (e) {
            m.reply(str);
        }
    }
}

handler.help = ['levelup'];
handler.tags = ['econ'];
handler.command = ['nivel', 'lvl', 'لفل', 'level'];

export default handler
