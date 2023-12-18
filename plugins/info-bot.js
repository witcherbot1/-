let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*هاا مـاذا تريـد/ي* ❓`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/c06dce68aa5c883e358b1.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(|bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
