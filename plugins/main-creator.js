let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;NIKOLSITA 👑;\nFN:NIKOLSITA 👑\nORG:NIKOLSITA 👑\nTITLE:\nitem1.TEL;waid=50671453710:50671453710\nitem1.X-ABLabel:NIKOLSITA 👑\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:NIKOLSITA 👑\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'NIKOLSITA ⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
