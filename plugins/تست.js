import axios from 'axios';
const handler = async (m, {
  conn,
  args,
  usedPrefix,
  command,
}) => {
  const res = (await axios.get(`https://gist.githubusercontent.com/YosefZoro1/41e80f742a04cbac0b82c838a2f9570d/raw/2d76480d96fc9c90254ae431f2ce005947f9afbb/edit.json`)).data;
  const mystic = await res[Math.floor(res.length * Math.random())];
  conn.sendMessage(m.chat, {
    video: {
      url: mystic,
    },
    caption: `*𝑬𝑫𝑰𝑻 𝑩𝒀 𝒁𝑶𝑹𝑶 ⚡*`,
  }, {
    quoted: m,
  });
  // conn.sendButton(m.chat, `_Navidad 🧑‍🎄_`, author, mystic, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `${usedPrefix + command}`]], m)
};
handler.help = ['navidad'];
handler.tags = ['internet'];
handler.command = /^(ديت)$/i;
export default handler;
