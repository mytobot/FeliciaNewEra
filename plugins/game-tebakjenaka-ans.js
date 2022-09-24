import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hjen/i.test(m.quoted.text) || /.*hjen/i.test(m.text))
        return !0
    this.tebakjenaka = this.tebakjenaka ? this.tebakjenaka : {}
    if (!(id in this.tebakjenaka))
        return conn.sendButton(m.chat, '*Soal Itu Telah Berakhir*', author, null, buttontebakjenaka, m)
    if (m.quoted.id == this.tebakjenaka[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakjenaka[id][3])
            delete this.tebakjenaka[id]
            return conn.sendButton(m.chat, '*Menyerah Ya.*', author, null, buttontebakjenaka, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakjenaka[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakjenaka[id][2]
            conn.sendButton(m.chat, `*✅BENAR*\n+${this.tebakjenaka[id][2]} XP`, author, null, buttontebakjenaka, m)
            clearTimeout(this.tebakjenaka[id][3])
            delete this.tebakjenaka[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Hampir Benar*`)
        else
            conn.sendButton(m.chat, `*Salah*`, author, null, [
                ['🔎', '/hjen'],
                ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakjenaka = [
    ['𝐓𝐄𝐁𝐀𝐊 𝐉𝐄𝐍𝐀𝐊𝐀', '/tebakjenaka']
]