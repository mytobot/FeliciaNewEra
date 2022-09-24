let handler = async (m, { conn, text }) => {
  if (!text) throw '*Example: #ytcomment 𝗙𝗲𝗹𝗶𝗰𝗶𝗮 𝗕𝗼𝘁 𝗙𝗮𝗻 𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝘁𝘆*'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender).catch(_ => ''),
    comment: text,
    username: m.pushName
  }), 'yt-comment.png', 'Here is your comment', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['internet']
handler.limit = true

handler.command = /^(ytcomment)$/i

export default handler
