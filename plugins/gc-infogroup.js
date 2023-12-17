const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const {antiToxic, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*「 معلومات الجروب 」*\n
*معرف الجروب :* 
${groupMetadata.id}

*الاسم :* 
${groupMetadata.subject}

*الوصف :* 
${groupMetadata.desc?.toString() || 'مفيش وصف 🐧'}

*عدد الاعضاء :*
${participants.length} عضو

*المالك :* 
@${owner.split('@')[0]}

*الادمنز - المشرفين :*
${listAdmin}

*الخيارات :*
❈↲ الترحيب : ${welcome ? '✅' : '❌'}
❈↲ انتي لينك : ${antiLink ? '✅' : '❌'} 
❈↲ انتي لينك *2 :* ${antiLink2 ? '✅' : '❌'} 
❈↲ انتي فايرس : ${antiTraba ? '✅' : '❌'} 
❈↲ اوتو استيكر : ${autosticker ? '✅' : '❌'} 
❈↲ مُكتَشَف : ${detect ? '✅' : '❌'} 
❈↲ لفل تلقائي: ${global.db.data.users[m.sender].autolevelup ? '✅' : '❌'}
❈↲ الطرد والاضافه: ${global.db.data.settings[conn.user.jid].restrict ? '✅' : '❌'}
❈↲ الاستيكرات : ${stickers ? '✅' : '❌'}
❈↲ الرياكشن : ${reaction ? '✅' : '❌'}
❈↲ الصوت : ${audios ? '✅' : '❌'} 
❈↲ انتي توكسيك : ${antitoxic ? '✅' : '❌'} 
❈↲ انتي فيك : ${antifake ? '✅' : '❌'} 
❈↲ مضاد المشاهده : ${antiviewonce ? '✅' : '❌'}
❈↲ مضاد الحذف : ${global.db.data.chats[m.chat].delete ? '✅' : '❌'}
❈↲ انتي تيكتوك : ${antiTiktok ? '✅' : '❌'}
❈↲ انتي يوتيوب : ${antiYoutube ? '✅' : '❌'}
❈↲ انتي تليجرام : ${antiTelegram ? '✅' : '❌'}
❈↲ انتي فيسبوك : ${antiFacebook ? '✅' : '❌'}
❈↲ انتي انستغرام : ${antiInstagram ? '✅' : '❌'}
❈↲ انتي تويتر : ${antiTwitter ? '✅' : '❌'}
❈↲ الادارة : ${modoadmin ? '✅' : '❌'} 
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(الجروب|gro?upinfo|info(gro?up|gc))$/i;
handler.group = true;
export default handler;
