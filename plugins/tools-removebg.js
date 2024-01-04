import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

const handler = async (m, { conn, text, usedPrefix, command }) => {

  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    
    
    const img = await q.download();
    //let apikey = 'HP1LME2sjA6BeBb6jHtfsU7h' 
    let apikey = 'jf3DB4nBaYLnGjyfLnwTJUtX'
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', img, 'file.jpg');

    const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
      headers: {
        ...formData.getHeaders(),
        'X-Api-Key': apikey,
      },
      responseType: 'arraybuffer',
      encoding: null,
    });


    if (response.status !== 200) {
      throw new Error(`خطأ: ${response.status} ${response.statusText}`);
    }

    const imageData = response.data;

    fs.writeFileSync('./tmp/no-bg.png', imageData);

    // إضافة التسمية التوضيحية إلى الصورة
    const caption = 'تم الصنع بواسطة, dark man';
    conn.sendFile(m.chat, './tmp/no-bg.png', '', caption, m);
 
  } catch (e) {
    console.error(e);
    m.reply('قم بوضع علامة على الصوره لتفريغها.');
  }
};

handler.command = /^rmbg|removebg|تفريغ|أفراغ|افراغ$/i;
export default handler;
