let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) await conn.sendButton(m.chat, `*[❗] Masih Ada Vote Di Chat Ini*`, author, null, [
                ['𝗗𝗘𝗟𝗘𝗧𝗘', `${usedPrefix}-vote`]
            ], m)
            let caption = `${htjava} MULAI VOTE ${htjava}
${dmenub} *${usedPrefix}upvote* - untuk setuju
${dmenub} *${usedPrefix}devote* - untuk tidak setuju
${dmenub} *${usedPrefix}cekvote* - untuk mengecek vote
${dmenub} *${usedPrefix}hapusvote* - untuk menghapus vote
${cmenua}`
            await conn.sendButton(m.chat, author, caption, null, [
                ['𝗨𝗣𝗩𝗢𝗧𝗘', `${usedPrefix}upvote`],
                ['𝗗𝗘𝗩𝗢𝗧𝗘', `${usedPrefix}devote`]
            ], m)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai|\+)vote$/i
handler.register = true
handler.admin = true
handler.group = true

export default handler
