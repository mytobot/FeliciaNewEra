let handler = async (m, { conn }) => {
    conn.tebakanjime = conn.tebakanjime ? conn.tebakanjime : {}
    let id = m.chat
    if (!(id in conn.tebakanjime)) throw false
    let json = conn.tebakanjime[id][1]
    conn.sendButton(m.chat, '```' + json.name.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
    ], m)
}
handler.command = /^hani$/i

handler.limit = true

export default handler