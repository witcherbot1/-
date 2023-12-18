import axios from 'axios';
import cheerio from 'cheerio';

var handler = async (m, { conn, args }) => {
  if (!args[0]) {
    throw 'فين رابط الفيد❔ ';
  }

  try {
m.react(rwait);

    const tiktokData = await downloadTikTok(args[0]);

    if (!tiktokData) {
      throw 'خطأ في التنزيل';
    }

    const videoURL = tiktokData.video.noWatermark;

    const videoURLWatermark = tiktokData.video.watermark;

    const ppTiktok = tiktokData.author.avatar;

    const infonya_gan =`✅ اتفضل يحب`;

    if (videoURL || videoURLWatermark) {
      await conn.sendFile(m.chat, videoURL, 'tiktok.mp4', `𝑍𝑂𝑅𝑂⚡3𝑀𝐾\n\n${infonya_gan}`, m);
      setTimeout(async () => {
        m.react(done); 
      }, 5000);


    } else {
      throw 'لا توجد روابط فيديو متاحة';
    }
  } catch (error) {
    conn.reply(m.chat, `Error: ${error}`, m);
  }
};

handler.help = ['Z O R O'].map((v) => v + ' <url>');
handler.tags = ['Z O R O'];
handler.command = /^(تيكتوك|تيك)$/i;

export default handler;

async function downloadTikTok(url) {
  // 
  let tiklydownAPI = `https://api.tiklydown.eu.org/api/download?url=${url}`;
  try {
    let response = await axios.get(tiklydownAPI);
    return response.data;
  } catch (error) {
    // 
    return tiktokdl(url);
  }
}

async function tiktokdl(url) {
  if (!/تيكتوك/.test(url)) {
    throw 'عنوان URL لـ TikTok غير صالح!';
  }

  const gettoken = await axios.get('https://tikdown.org/id');
  const $ = cheerio.load(gettoken.data);
  const token = $('#download-form > input[type=hidden]:nth-child(2)').attr('value');
  const param = {
    url: url,
    _token: token,
  };

  const { data } = await axios.request('https://tikdown.org/getAjax?', {
    method: 'post',
    data: new URLSearchParams(Object.entries(param)),
    headers: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
    },
  });

  var getdata = cheerio.load(data.html);

  if (data.status) {
    return {
      status: true,
      thumbnail: getdata('img').attr('src'),
      video: getdata('div.download-links > div:nth-child(1) > a').attr('href'),
      audio: getdata('div.download-links > div:nth-child(2) > a').attr('href'),
    };
  } else {
    return {
      status: false,
    };
  }
}
