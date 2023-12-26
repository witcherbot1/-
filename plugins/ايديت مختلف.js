import axios from 'axios';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        // جلب البيانات من الرابط
        let response = await axios.get('https://gist.githubusercontent.com/YosefZoro1/41e80f742a04cbac0b82c838a2f9570d/raw/2d76480d96fc9c90254ae431f2ce005947f9afbb/edit.json');
        
        // التحقق من نجاح الطلب
        if (response.status !== 200) {
            throw new Error(`Failed to fetch data. Status code: ${response.status}`);
        }

        let data = response.data;

        // اختيار فيديو عشوائي من البيانات المستردة
        let videoUrl = data[Math.floor(Math.random() * data.length)];

        // إرسال الفيديو إلى المجموعة
        conn.sendFile(m.chat, videoUrl, 'error.mp4', '𝑬𝑫𝑰𝑻 𝑩𝒀 𝒁𝑶𝑹𝑶 ⚡', m);
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, 'حدث خطأ أثناء تنفيذ الأمر. الرجاء المحاولة مرة أخرى لاحقًا.', m);
    }
};

handler.help = ['Z O R O'];
handler.tags = ['Z O R O'];
handler.command = /^(ايديت)$/i;

export default handler;
