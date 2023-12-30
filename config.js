import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
import { en, es, id, ar, pt } from './lib/idiomas/total-idiomas.js'

global.botnumber = ""

global.owner = [
  ['201032389641', '𝑍𝑂𝑅𝑂⚡3𝑀𝐾', true],
  ['201032389641', '𝑍𝑂𝑅𝑂⚡3𝑀𝐾', true],
  ['201032389641', '𝑍𝑂𝑅𝑂⚡3𝑀𝐾', true],
  ['201032389641', '𝑍𝑂𝑅𝑂⚡3𝑀𝐾', true],
  ['201032389641', '𝑍𝑂𝑅𝑂⚡3𝑀𝐾', true],
  ['201032389641', '𝑍𝑂𝑅𝑂⚡3𝑀𝐾', true],
  ['201032389641', '𝑍𝑂𝑅𝑂⚡3𝑀𝐾', true],
  ['201032389641', '𝑍𝑂𝑅𝑂⚡3𝑀𝐾', false],
  ['201032389641', '𝑍𝑂𝑅𝑂⚡3𝑀𝐾', true],
  ['201032389641','𝑍𝑂𝑅𝑂⚡3𝑀𝐾', true],
  ['201032389641'],
  ['201032389641'],
  ['201032389641'],
  ['201032389641'],
  ['201032389641'],
  ['201032389641'],
  ['201032389641'],
  ['201032389641'], 
  ['201032389641'],  
  ['201032389641'], 
  ['201032389641']
];

global.suittag = ['201032389641'];
global.prems = ['201032389641'];

global.lenguajeGB = ar  //Idioma de The-LoliBot-MD, Ejemplo: es | en | pt...
// Sticker WM
global.botname = '𝒁𝑶𝑹𝑶'
global.premium = 'true'
global.menuvid = 'https://i.imgur.com/uiwALih.mp4'
global.igfg = 'https://solo.to/yosef.zoro' 
global.dygp = 'https://solo.to/yosef.zoro'
global.fgsc = 'https://solo.to/yosef.zoro' 
global.fgyt = 'https://youtube.com/@The-ZoroBot-MD?si=DncZQM6sKC0F6MhG'
global.fgpyp = 'https://youtube.com/@The-ZoroBot-MD?si=DncZQM6sKC0F6MhG'
global.fglog = 'https://solo.to/yosef.zoro' 
global.thumb = fs.readFileSync('./Menu2.jpg')


global.packname = '𝐵𝑌:𝑍𝑂𝑅𝑂⚡𝐵𝑂𝑇';
global.author = '𝑌𝛩𝑺𝐸𝐹⚡3𝑀𝐾';
global.wm = '𝑍𝑂𝑅𝑂 - 𝐵𝑂𝑇';
global.titulowm = '𝑍𝑂𝑅𝑂 - 𝐵𝑂𝑇';
global.titulowm2 = `𝑍𝑂𝑅𝑂 - 𝐵𝑂𝑇`
global.igfg = '𝑍𝑂𝑅𝑂 - 𝐵𝑂𝑇';
global.wait = '*[ ⏳ ] انتظر...*';

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ رياكت
global.wait = '*⌛ _انتظر..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '⚡'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ رياكت

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'ar';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('ar', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('ar', {month: 'long'});
global.año = d.toLocaleDateString('ar', {year: 'numeric'});
global.tiempo = d.toLocaleString('ar-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝐵𝑌:𝑍𝑂𝑅𝑂⚡𝐵𝑂𝑇`;
global.gt = '𝐵𝑌:𝑍𝑂𝑅𝑂⚡𝐵𝑂𝑇';
global.mysticbot = '𝐵𝑌:𝑍𝑂𝑅𝑂⚡𝐵𝑂𝑇';
global.md = 'https://solo.to/yosef.zoro';
global.mysticbot = 'https://solo.to/yosef.zoro';
global.waitt = '*⌛ _جاري التحميل..._ ▬▬▭▭▭*';
global.waittt = '*⌛ _جاري التحميل..._ ▬▬▬▬▭▭*';
global.waitttt = '*⌛ _جاري التحميل..._ ▬▬▬▬▬▬▭*';
global.nomorown = '201032389641';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
