const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, {conn, isAdmin, isBotAdmin}) {
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
  const grupo = `https://chat.whatsapp.com`;
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*مرحبًا! الرابط معطل هنا، يرجى التواصل مع الإدارة ⚡*');
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*「 روابط محظورة 」*\n*مرحبًا ${user}، يُمنع وضع روابط المجموعات هنا، الرجاء عدم الإعلان...!!*`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('مرحبًا ${user}، يُمنع وضع روابط المجموعات هنا، الرجاء عدم الإعلان...!!*');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('*[❗تحذير❗] تم تعطيل حماية البوت من تنفيذ الأوامر (القيود). يمكنك القيام بكتابة الأوامر بحرية (#enable_restrict) لتمكين حماية البوت وتفعيل القيود*');
  }
  return !0;
}
