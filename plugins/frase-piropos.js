/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

const handler = async (m, {conn, text}) => {
  m.reply(`*╔═══════════════════════════*\n➢ *"${pickRandom(global.piropo)}"*\n*╚═══════════════════════════*`);
};
handler.tags = ['frases'];
handler.command = ['غزل'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.piropo = [
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها',
  'دز امها',
  'دز امها.',
  'دز امها',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.',
  'دز امها.'];
