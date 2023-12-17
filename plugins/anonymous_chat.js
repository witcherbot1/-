async function handler(m, {usedPrefix, command}) {
  command = command.toLowerCase();
  this.anonymous = this.anonymous ? this.anonymous : {};
  switch (command) {
    case 'next':
    case 'leave': {
      const room = Object.values(this.anonymous).find((room) => room.check(m.sender));
      if (!room) return this.sendMessage(other, {text: `*[❗𝐈𝐍𝐅𝐎❗] لا يوجد دردشة متنقلة في الوقت الحالي*\n\n*هل تريد الانضمام إلى دردشة أخرى؟*\nأرسل ${usedPrefix}start`}, {quoted: m});
      m.reply('*[ ✔ ] تم الخروج من الدردشة بنجاح*');
      const other = room.other(m.sender);
      if (other) await this.sendMessage(other, {text: `*[❗𝐈𝐍𝐅𝐎❗] ${conn.getName(m.sender)} قام بمغادرة الدردشة*\n\n*هل تريد الانضمام إلى دردشة أخرى؟*\nأرسل ${usedPrefix}start`}, {quoted: m});
      delete this.anonymous[room.id];
      if (command === 'leave') break;
    }
    case 'start': {
      if (Object.values(this.anonymous).find((room) => room.check(m.sender))) return this.sendMessage(m.chat, {text: `*[❗𝐈𝐍𝐅𝐎❗] أنت بالفعل في دردشة متنقلة أو تم انتظار دردشة أخرى*\n\n*هل تريد مغادرة الدردشة الحالية؟*\nأرسل ${usedPrefix}leave`}, {quoted: m});
      const room = Object.values(this.anonymous).find((room) => room.state === 'WAITING' && !room.check(m.sender));
      if (room) {
        await this.sendMessage(room.a, {text: `*[ ✔ ] تم العثور على شخص للدردشة معه، يرجى الانتظار حتى يقبل الشخص الآخر*`}, {quoted: m});
        room.b = m.sender;
        room.state = 'CHATTING';
        await this.sendMessage(m.chat, {text: `*[ ✔ ] تم العثور على شخص للدردشة معه، يرجى الانتظار حتى يقبل الشخص الآخر*\n\n*إذا كنت ترغب في الانتقال إلى الشخص الآخر، ارسل ${usedPrefix}next*`}, {quoted: m});
      } else {
        const id = +new Date;
        this.anonymous[id] = {
          id,
          a: m.sender,
          b: '',
          state: 'WAITING',
          check: function(who = '') {
            return [this.a, this.b].includes(who);
          },
          other: function(who = '') {
            return who === this.a ? this.b : who === this.b ? this.a : '';
          },
        };
        await this.sendMessage(m.chat, {text: `*[❗𝐈𝐍𝐅𝐎❗] تم تفعيل الدردشة المتنقلة، يرجى الانتظار حتى يتم العثور على شخص للدردشة معك*\n\n*إذا كنت ترغب في إلغاء البحث، ارسل ${usedPrefix}leave*`}, {quoted: m});
      }
      break;
    }
  }
}
handler.help = ['start', 'leave', 'next'];
handler.tags = ['anonymous'];
handler.command = ['start', 'leave', 'next'];
handler.private = true;
export default handler;
