import axios from 'axios';

let handler = async (m, { command, conn, usedPrefix }) => {
  try {
    let res = (await axios.get('https://api.popcat.xyz/car')).data;
    
    if (!res || !res.image || !res.title) {
      throw new Error('استجابة API غير صحيحة');
    }

    conn.sendFile(m.chat, res.image, 'car_image.jpg', `${res.title}`, m);
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'حدث خطأ أثناء جلب البيانات', m);
  }
};

handler.command = handler.help = ['car|c'];
handler.tags = ['car'];
export default handler;
