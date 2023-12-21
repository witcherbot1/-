function handler(m) {
  let data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.alias = ['owner']
handler.command = /^(owner)$/i
handler.help = ['owner']
handler.tags = ['main']
export default handler
