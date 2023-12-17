// Creditos del codigo a @Gatito-kw //

/* GitHub: https://github.com/Gatito-kw */

/* Bot: https://github.com/Gatito-kw/nekobot-md */

import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = await (await fetch(pp)).buffer();
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

   if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `*تم ترقية عضو إلى مدير حديثًا.*\n\n`;
    txt1 += `*◦  المجموعة:* ${groupName}\n`;
    txt1 += `*◦  المدير الجديد:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt1 += `*◦  تنفيذ بواسطة:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, { image: img, caption: txt1, mentions: mentionsString }, { quoted: fkontak2 });
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `*تم تخفيض مدير إلى عضو حديثًا.*\n\n`;
    txt2 += `*◦  المجموعة:* ${groupName}\n`;
    txt2 += `*◦  تمت إزالة:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt2 += `*◦  تنفيذ بواسطة:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, { image: img, caption: txt2, mentions: mentionsString }, { quoted: fkontak2 });
  }

  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `*تمت إضافة عضو جديد إلى المجموعة حديثًا.*\n\n`;
    txt3 += `*◦  المجموعة:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `*◦  تمت الإضافة:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt3 += `*◦  تنفيذ بواسطة:* @${m.sender.split`@`[0]}`;
    } else {
      txt3 += `*◦  تمت الإضافة:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, { image: img, caption: txt3, mentions: mentionsContentM }, { quoted: fkontak2 });
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `*تمت إزالة عضو من المجموعة حديثًا.*\n\n`;
    txt4 += `*◦  المجموعة:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt4 += `*◦  تمت الإزالة:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt4 += `*◦  تنفيذ بواسطة:* @${m.sender.split`@`[0]}`;
    } else {
      txt4 += `*◦  تمت الإزالة:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt4, mentions: mentionsContentM }, { quoted: fkontak2 });
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = 'مغادرة';
    } else {
      ax = 'تم الطرد';
    }
    let txt5 = `*تم ${ax} عضو من المجموعة حديثًا.*\n\n`;
    txt5 += `*◦  المجموعة:* ${groupName}\n`;
    if (ax === 'تم الطرد') {
      txt5 += `*◦  تم الطرد:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt5 += `*◦  تنفيذ بواسطة:* @${m.sender.split`@`[0]}`;
    } else {
      txt5 += `*◦  تم المغادرة:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt5, mentions: mentionsContentM }, { quoted: fkontak2 });
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion;
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'مغلق';
    } else {
      accion = 
