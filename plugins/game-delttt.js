import MessageType from '@whiskeysockets/baileys';
const handler = async (m, {conn, usedPrefix, command}) => {
  const room = Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender));
  if (room == undefined) return conn.sendButton(m.chat, '*[❗] ليس لديك أي لعبة اكس او الجارية*', wm, null, [['بدء لعبة جديدة', `${usedPrefix}ttt partida nueva`]], m);
  delete conn.game[room.id];
  await m.reply('*[ ✔ ] تم حذف لعبة اكس او الخاصة بك في الغرفة*');
};
handler.command = /^(حذف|deltt|delxo|deltictactoe)$/i;
handler.fail = null;
export default handler;
