const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = `${pesan}`;
  let teks = `*⺀এ𝘔𝘦𝘯𝘤𝘪𝘰𝘯 𝘎𝘦𝘯𝘦𝘳𝘢𝘭!এ⺀*\n\n *✉ 𝙈𝙀𝙉𝙎𝘼𝙅𝙀:* *${pesan}* \n *👤 𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎:*  *${participants.length}* ${oi}\n\n*➥ NɪᴋᴏʟBᴏᴛ ᴛᴇ ᴍᴇɴᴄɪᴏɴᴀ!*\n`;
  for (const mem of participants) {
    teks += `*┊ᡣ𐭩* @${mem.id.split('@')[0]}\n`;
  }
  teks += `*╰───── 𝐍𝐢𝐤𝐨𝐥 𝐁𝐨𝐭 ─────╯*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;