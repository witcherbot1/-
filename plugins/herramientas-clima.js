import axios from 'axios';
const handler = async (m, {args}) => {
  if (!args[0]) throw '*[❗] يرجى إدخال اسم المدينة أو الدولة*';
  try {
    const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`);
    const res = await response;
    const name = res.data.name;
    const Country = res.data.sys.country;
    const Weather = res.data.weather[0].description;
    const Temperature = res.data.main.temp + '°C';
    const Minimum_Temperature = res.data.main.temp_min + '°C';
    const Maximum_Temperature = res.data.main.temp_max + '°C';
    const Humidity = res.data.main.humidity + '%';
    const Wind = res.data.wind.speed + 'km/h';
    const wea = `「 📍 」الموقع: ${name}\n「 🗺️ 」البلد: ${country}\n「 🌤️ 」الطقس: ${weather}\n「 🌡️ 」درجة الحرارة: ${temperature}\n「 💠 」 درجة الحرارة الدنيا: ${minTemperature}\n「 📛 」 درجة الحرارة القصوى: ${maxTemperature}\n「 💦 」الرطوبة: ${humidity}\n「 🌬️ 」 الرياح: ${wind}`;
    m.reply(wea);
  } catch {
    return '*[❗] لا يمكن الحصول على نتائج الطقس في الوقت الحالي، يرجى المحاولة مرة أخرى*';
  }
};
handler.help = ['clima *<ciudad/país>*'];
handler.tags = ['herramientas'];
handler.command = /^(الطقس|الجو)$/i;
export default handler;
