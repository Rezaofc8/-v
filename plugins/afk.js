let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(global.wait)
m.reply(`
Kamu sekarang AFK ${text ? '\nDengan Alasan : ' + text : 'Tanpa Alasan'}
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
//@${who.split`@`[0]}        /////@${m.sender.split`@`[0]
