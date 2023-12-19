import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

/* Para agregar más APIs asegurate de poner global.apiname = ['APIKey'] */ /* By Skid 🤑 */

global.openai_key = 'sk-0';
/* Obtén tu API Key en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = 'org-3';
/* Obtén tu ID de organización en este enlace: https://platform.openai.com/account/org-settings */


global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2']
global.itsrose = ['4b146102c4d500809da9d1ff'];

global.APIs = {
  ApiEmpire: 'https://api-brunosobrino.zipponodes.xyz',
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',
  vihangayt: 'https://vihangayt.me',
  erdwpe: 'https://api.erdwpe.com',
  xyroinee: 'https://api.xyroinee.xyz',
  nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'GataDios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren',
  'https://api.xyroinee.xyz': 'uwgflzFEh6'
};

/** ************************/
global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    const emot = {
      مستوى: '🧬',
      الحد: '💎',
      تجربة: '⚡',
      بنك: '🏦',
      الماس: '💎',
      صحة: '❤️',
      كيوبي: '🌀',
      عدد_الانضمام: '🪙',
      زمرد: '💚',
      قوة_الإرادة: '✨',
      دور: '💪',
      ممتاز: '🎟️',
      نقاط_التجربة: '📧',
      ذهب: '👑',
      قمامة: '🗑',
      كريستال: '🔮',
      ذكاء: '🧠',
      سلسلة: '🕸️',
      مفتاح_الذهب: '🔑',
      مفتاح_الحديد: '🗝️',
      إيماس: '🪅',
      عصا_الصيد: '🎣',
      جواهر: '🍀',
      عصا_السحر: '⚕️',
      منا: '🪄',
      الرشاقة: '🤸‍♂️',
      كريستال_مظلم: '♠️',
      حديد: '⛓️',
      صخرة: '🪨',
      جرعة: '🥤',
      تفوق: '💼',
      سرقة: '🚔',
      محسن: '🧰',
      خشب: '🪵',
      القوة: '🦹‍♀️',
      قوس: '🏹',
      درع: '🥼',
      قوس_متفوق: '🏹',
      مطرقة_التعدين: '⛏️',
      سيف: '⚔️',
      عام: '📦',
      غير_عادي: '🥡',
      أسطوري: '🗳️',
      أسطوري: '🎁',
      طعام_الحيوانات: '🍖',
      حيوان_اليف: '🍱',
      بذرة_العنب: '🍇',
      بذرة_التفاح: '🍎',
      بذرة_البرتقال: '🍊',
      بذرة_المانجو: '🥭',
      بذرة_الموز: '🍌',
      دجاج: '🐓',
      خنزير: '🐖',
      خنزير_بري: '🐗',
      ثور: '🐃',
      تمساح: '🐊',
      قط: '🐈',
      كينتاور: '🐐',
      دجاج: '🐓',
      بقرة: '🐄',
      كلب: '🐕',
      تنين: '🐉',
      فيل: '🐘',
      ثعلب: '🦊',
      زرافة: '🦒',
      جريفين: '🦅',
      حصان: '🐎',
      ماعز: '🐐',
      جاموس: '🐃',
      أسد: '🦁',
      نقود_سحرية: '👾',
      قرد: '🐒',
      باندا: '🐼',
      ثعبان: '🐍',
      فينيكس: '🕊️',
      وحيد_القرن: '🦏',
      ذئب: '🐺',
      نمر: '🐅',
      حبار: '🦑',
      جمبري: '🦐',
      سمك: '🐟',
      مكرونة: '🍝',
      مستحضر_نوفا: '🧪',
      سكين: '🔪',
    };
    const results = Object.keys(emot).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }};
global.rpgg = { // Solo emojis
  emoticon(string) {
    string = string.toLowerCase();
    const emott = {
      مستوى: '🧬',
      الحد: '💎',
      تجربة: '⚡',
      بنك: '🏦',
      الماس: '💎',
      صحة: '❤️',
      كيوبي: '🌀',
      عدد_الانضمام: '🪙',
      زمرد: '💚',
      قوة_الإرادة: '✨',
      دور: '💪',
      ممتاز: '🎟️',
      نقاط_التجربة: '📧',
      ذهب: '👑',
      قمامة: '🗑',
      كريستال: '🔮',
      ذكاء: '🧠',
      سلسلة: '🕸️',
      مفتاح_الذهب: '🔑',
      مفتاح_الحديد: '🗝️',
      إيماس: '🪅',
      عصا_الصيد: '🎣',
      جواهر: '🍀',
      عصا_السحر: '⚕️',
      منا: '🪄',
      الرشاقة: '🤸‍♂️',
      كريستال_مظلم: '♠️',
      حديد: '⛓️',
      صخرة: '🪨',
      جرعة: '🥤',
      تفوق: '💼',
      سرقة: '🚔',
      محسن: '🧰',
      خشب: '🪵',
      القوة: '🦹‍♀️',
      قوس: '🏹',
      درع: '🥼',
      قوس_متفوق: '🏹',
      مطرقة_التعدين: '⛏️',
      سيف: '⚔️',
      عام: '📦',
      غير_عادي: '🥡',
      أسطوري: '🗳️',
      أسطوري: '🎁',
      طعام_الحيوانات: '🍖',
      حيوان_اليف: '🍱',
      بذرة_العنب: '🍇',
      بذرة_التفاح: '🍎',
      بذرة_البرتقال: '🍊',
      بذرة_المانجو: '🥭',
      بذرة_الموز: '🍌',
      دجاج: '🐓',
      خنزير: '🐖',
      خنزير_بري: '🐗',
      ثور: '🐃',
      تمساح: '🐊',
      قط: '🐈',
      كينتاور: '🐐',
      دجاج: '🐓',
      بقرة: '🐄',
      كلب: '🐕',
      تنين: '🐉',
      فيل: '🐘',
      ثعلب: '🦊',
      زرافة: '🦒',
      جريفين: '🦅',
      حصان: '🐎',
      ماعز: '🐐',
      جاموس: '🐃',
      أسد: '🦁',
      نقود_سحرية: '👾',
      قرد: '🐒',
      باندا: '🐼',
      ثعبان: '🐍',
      فينيكس: '🕊️',
      وحيد_القرن: '🦏',
      ذئب: '🐺',
      نمر: '🐅',
      حبار: '🦑',
      جمبري: '🦐',
      سمك: '🐟',
      مكرونة: '🍝',
      مستحضر_نوفا: '🧪',
      سكين: '🔪',
    };
    const results = Object.keys(emott).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }};
global.rpgshop = { // Tienda
  emoticon(string) {
    string = string.toLowerCase();
    const emottt = {
      نقاط_خبره: '⚡ Experiencia',
      الحد: '💎 Diamante',
      الماس: '💎 Diamante',
      joincount: '🪙 Token',
      emerald: '💚 Esmeralda',
      berlian: '♦️ Joya',
      kyubi: '🌀 Magia',
      gold: '👑 Oro',
      money: '👾 MysticCoins',
      tiketcoin: '🎫 mystic Tickers',
      stamina: '✨ Energía',
      potion: '🥤 Poción',
      aqua: '💧 Agua',
      trash: '🗑 Basura',
      wood: '🪵 Madera',
      rock: '🪨 Roca',
      batu: '🥌 Piedra',
      string: '🕸️ Cuerda',
      iron: '⛓️ Hierro',
      coal: '⚱️ Carbón',
      botol: '🍶 Botella',
      kaleng: '🥫 Lata',
      kardus: '🪧 Cartón',
      eleksirb: '💡 Electricidad',
      emasbatang: '〽️ Barra de Oro',
      emasbiasa: '🧭 Oro Común',
      rubah: '🦊🌫️ Zorro Grande',
      sampah: '🗑🌫️ Super Basura',
      serigala: '🐺🌫️ Super Lobo',
      kayu: '🛷 Super Madera',
      sword: '⚔️ Espada',
      umpan: '🪱 Carnada',
      healtmonster: '💵 Billetes',
      emas: '🪅 Piñata',
      pancingan: '🪝 Gancho',
      pancing: '🎣 Caña de Pescar',
      common: '📦 Caja Común',
      uncoommon: '🥡 Caja Poco Común',
      mythic: '🗳️ Caja Mítica',
      pet: '📫 Caja de Mascotas', // ?
      gardenboxs: '💐 Caja de Jardinería', // ?
      legendary: '🎁 Caja Legendaria',
      anggur: '🍇 Uva',
      apel: '🍎 Manzana',
      jeruk: '🍊 Naranja',
      mangga: '🥭 Mango',
      pisang: '🍌 Platano',
      bibitanggur: '🌾🍇 Semillas de uva',
      bibitapel: '🌾🍎 Semillas de manzana',
      bibitjeruk: '🌾🍊 Semillas de naranja',
      bibitmangga: '🌾🥭 Semillas de Mango',
      bibitpisang: '🌾🍌 Semillas de plátano',
      centaur: '🐐 Centauro',
      griffin: '🦅 Ave',
      kucing: '🐈 Gato',
      naga: '🐉 Dragón',
      fox: '🦊 Zorro',
      kuda: '🐎 Caballo',
      phonix: '🕊️ Fénix',
      wolf: '🐺 Lobo',
      anjing: '🐶 Perro',
      petFood: '🍖 Alimento para Mascota', // ?
      makanancentaur: '🐐🥩 Comida de Centauro',
      makanangriffin: '🦅🥩 Comida de Ave',
      makanankyubi: '🌀🥩 Comida Mágica',
      makanannaga: '🐉🥩 Comida de Dragón',
      makananpet: '🍱🥩 Alimentos de mascotas',
      makananphonix: '🕊️🥩 Comida de Fénix',
    };
    const results = Object.keys(emottt).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emottt[results[0][0]];
  }};
global.rpgshopp = { // Tienda
  emoticon(string) {
    string = string.toLowerCase();
    const emotttt = {
      نقاط_خبره: '⚡',
      الحد: '💎',
      الماس: '💎+',
      joincount: '🪙',
      emerald: '💚',
      berlian: '♦️',
      kyubi: '🌀',
      gold: '👑',
      money: '👾',
      tiketcoin: '🎫',
      stamina: '✨',
      potion: '🥤',
      aqua: '💧',
      trash: '🗑',
      wood: '🪵',
      rock: '🪨',
      batu: '🥌',
      string: '🕸️',
      iron: '⛓️',
      coal: '⚱️',
      botol: '🍶',
      kaleng: '🥫',
      kardus: '🪧',
      eleksirb: '💡',
      emasbatang: '〽️',
      emasbiasa: '🧭',
      rubah: '🦊🌫️',
      sampah: '🗑🌫️',
      serigala: '🐺🌫️',
      kayu: '🛷',
      sword: '⚔️',
      umpan: '🪱',
      healtmonster: '💵',
      emas: '🪅',
      pancingan: '🪝',
      pancing: '🎣',
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      pet: '📫', // ?
      gardenboxs: '💐', // ?
      legendary: '🎁',
      anggur: '🍇',
      apel: '🍎',
      jeruk: '🍊',
      mangga: '🥭',
      pisang: '🍌',
      bibitanggur: '🌾🍇',
      bibitapel: '🌾🍎',
      bibitjeruk: '🌾🍊',
      bibitmangga: '🌾🥭',
      bibitpisang: '🌾🍌',
      centaur: '🐐',
      griffin: '🦅',
      kucing: '🐈',
      naga: '🐉',
      fox: '🦊',
      kuda: '🐎',
      phonix: '🕊️',
      wolf: '🐺',
      anjing: '🐶',
      petFood: '🍖', // ?
      makanancentaur: '🐐🥩',
      makanangriffin: '🦅🥩',
      makanankyubi: '🌀🥩',
      makanannaga: '🐉🥩',
      makananpet: '🍱🥩',
      makananphonix: '🕊️🥩',
    };
    const results = Object.keys(emotttt).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emotttt[results[0][0]];
  }};

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'api.js\''));
  import(`${file}?update=${Date.now()}`);
});
