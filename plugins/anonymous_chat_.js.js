export async function before(m, { match }) {
  if (!m.chat.endsWith('@s.whatsapp.net')) {
    return !0;
  }
  this.anonymous = this.anonymous ? this.anonymous : {};
  const room = Object.values(this.anonymous).find((room) => [room?.a, room?.b].includes(m.sender) && room?.state === 'CHATTING');
  if (room) {
    if (/^(next|leave|start)/.test(m.text)) {
      const other = [room?.a, room?.b].find((user) => user !== m.sender);
      if (other) {
        await this.copyNForward(other, m, true);
      } else {
        this.sendMessage(m.chat, { text: `*[❗] لست في دردشة، يرجى الانتظار حتى تكون في دردشة.*` }, { quoted: m });
      }
    }
  } else {
    if (!/^(next|leave|start)/.test(m.text)) {
      return;
    }
    this.sendMessage(m.chat, { text: `*[❗] لست في دردشة، يرجى الانتظار حتى تكون في دردشة.*` }, { quoted: m });
  }
  return !0;
}
