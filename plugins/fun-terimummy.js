import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';

let yoMamaJokeHandler = async (m, { conn, text }) => {
  try {
    let factResponse = await fetch(`https://nekos.life/api/v2/fact`);
    let nameResponse = await fetch(`https://nekos.life/api/v2/name`);

    if (!factResponse.ok || !nameResponse.ok) {
      throw new Error(`فشل طلب API مع الحالة ${factResponse.status} و ${nameResponse.status}`);
    }

    let factJson = await factResponse.json();
    let nameJson = await nameResponse.json();
    
    console.log('Fact JSON response:', factJson);
    console.log('Name JSON response:', nameJson);

    let yoMamaJoke = `${factJson.fact}`;
    let translatedName = `${nameJson.name}`;
    
    let translation = await translate(yoMamaJoke, { to: 'ar' });
    let translatedYoMamaJoke = `القائل ${translatedName}: الحقيقه ${translation.text}`;

    m.reply(translatedYoMamaJoke);
  } catch (error) {
    console.error(error);
  }
};

yoMamaJokeHandler.help = ['yomamajoke'];
yoMamaJokeHandler.tags = ['fun'];
yoMamaJokeHandler.command = /^(اقتباس2|حقيقه|مثابره)$/i;

export default yoMamaJokeHandler;
