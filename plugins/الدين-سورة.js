import {alquran} from '@bochilteam/scraper'
let handler = async (m, { args, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `البحث عن أي آية في القرآن بالصوت والقراءة :\n${usedPrefix + command} 1 2`
    if (isNaN(args[0]) || isNaN(args[1])) throw `مثال:\n${usedPrefix + command} 1 2`
    let api = await alquran()
    let mes = `
${api[args[0] - 1].ayahs[args[1] - 1].text.ar}
    
${api[args[0] - 1].ayahs[args[1] - 1].translation.en}
( Q.S ${api[args[0] - 1 ].asma.en.short} : ${api[args[0] - 1].ayahs[args[1] - 1].number.insurah} )
`.trim()
    m.reply(mes)
    conn.sendFile(m.chat, api[args[0] - 1].ayahs[args[1] - 1].audio.url, '', '', m)
}

handler.help = ['S H A D O W'].map(v => v + ' *surah no*')
handler.tags = ['S H A D O W']
handler.command = /^(سورة|سوره)$/i
export default handler
