const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await lolivid[Math.floor(Math.random() * lolivid.length)];
  conn.sendMessage(m.chat, {video: {url: res}, caption: `*𝑬𝑫𝑰𝑻 𝑩𝒀 𝒁𝑶𝑹𝑶 ⚡*`}, {quoted: m});
};
handler.help = ['lolivid'];
handler.tags = ['random'];
handler.command = /^(ديد|lolivideos|lolívid)$/i;
export default handler;

axios.get(`https://gist.githubusercontent.com/YosefZoro1/41e80f742a04cbac0b82c838a2f9570d/raw/2d76480d96fc9c90254ae431f2ce005947f9afbb/edit.json').data
];
