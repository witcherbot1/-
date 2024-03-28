import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0
    this.tekateki = this.tekateki ? this.tekateki : {}
    if (!(id in this.tekateki)) return m.reply('Ese رتب ya ha terminado!')
    if (m.quoted.id == this.tekateki[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tekateki[id][2]
            m.reply(`*⎔ ━─ ─ ╎⊱ ‹🎐› ⊰ ╎─ ─━ ⎔*\n\n*⧉ أحـسـنـت إجـابـة صـحـيـحـة 🍭✅*\n\n*〄 جـائـزتـك 🍬⇠* ${this.tekateki[id][2]} نـقـطـة┇*`)
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
        } else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) m.reply(`Casi lo logras!`)
        else m.reply('❐┃اجـابـة خـاطـئـة┃❌ ❯')
    }
    return !0
}

handler.exp = 0

export default handler
