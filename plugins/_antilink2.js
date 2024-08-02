const linkRegex = /https:/i;

export async function before(m, { conn, isAdmin, isBotAdmin, text }) {
    if (m.isBaileys && m.fromMe) {
        return !0;
    }

    if (!m.isGroup) return !1;

    const chat = global.db.data.chats[m.chat];
    const delet = m.key.participant;
    const bang = m.key.id;
    const bot = global.db.data.settings[this.user.jid] || {};
    const user = `@${m.sender.split`@`[0]}`;
    const isGroupLink = linkRegex.exec(m.text);

    if (chat.antiLink2 && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
            const linkThisGroup2 = `https://www.youtube.com/`;
            const linkThisGroup3 = `https://youtu.be/`;

            if (m.text.includes(linkThisGroup) || m.text.includes(linkThisGroup2) || m.text.includes(linkThisGroup3)) {
                return !0;
            }
        }

        await this.sendMessage(m.chat, {
            text: `*「 روابط محظورة 」*\n*أرحب ${user}، يُمنع وضع روابط المجموعات أو روابط الفيديوهات هنا، الرجاء عدم الإعلان...!!*`,
            mentions: [m.sender]
        }, { quoted: m });

        if (!isBotAdmin) return m.reply('*[❗تحذير❗] البوت ليس أدمن، لا يمكن وضع روابط المجموعات أو روابط الفيديوهات هنا*');

        if (isBotAdmin && bot.restrict) {
            await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });
            const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
            if (responseb[0].status === '404') return;
        } else if (!bot.restrict) {
            return m.reply('*[❗تحذير❗] البروبايت ديل بوت غير مُفعل، لا يمكن وضع روابط المجموعات أو روابط الفيديوهات هنا*');
        }
    }

    return !0;
}
