import fetch from 'node-fetch';
import translate from 'translate-google-api';

let yoMamaJokeHandler = async (m, { conn, text }) => {
  try {
    let res = await fetch(`https://yomamaindra.onrender.com/jokes`);

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    let yoMamaJoke = `${json.joke}`;
    
    let translation = await translate(yoMamaJoke, { to: 'ar' });

    let yoMamaJoke = translation.text;

    m.reply(yoMamaJoke);
  } catch (error) {
    console.error(error);
  }
};

yoMamaJokeHandler.help = ['yomamajoke'];
yoMamaJokeHandler.tags = ['fun'];
yoMamaJokeHandler.command = /^(yomamajoke|yomama|terimummy)$/i;

export default yoMamaJokeHandler;
