
import translate from '@vitalets/google-translate-api'
const defaultLang = 'ar'
const tld = 'cn'

let handler = async (m, { args, usedPrefix, command }) => {
    let err = `
📌 *مثال:*

*${usedPrefix + command}* اللغة + لنص
*${usedPrefix + command}*  hola 

≡ *اللغات الي تقدر تترجمها:* 

https://cloud.google.com/translate/docs/languages
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       m.reply(result.text)
    } catch (e) {
        throw err
    } 

}
handler.help = ['R O B']
handler.tags = ['R O B']
handler.command = ['ترجمة', 'ترجم', 'ترجمه']

export default handler
