let handler = async (m, { conn }) => {
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (!(id in conn.tebakkabupaten)) throw false
    let json = conn.tebakkabupaten[id][1]
    conn.sendButton(m.chat, '```' + json.title.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
    ], m)
}
handler.command = /^hkab$/i

handler.limit = true

export default handler