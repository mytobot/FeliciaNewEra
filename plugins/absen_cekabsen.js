
let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
    let imgr = flaaa.getRandom()
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) await conn.sendButton(m.chat, bottime, `*Tidak Ada Absen Berlangsung diGrup Ini!*\n\n*• Tekan Tombol diBawah Untuk Memulai Absen*`, `${imgr + '𝐒𝐓𝐀𝐑𝐓 𝐀𝐁𝐒𝐄𝐍𝐓'}`, [
                ['𝐒𝐓𝐀𝐑𝐓 𝐀𝐁𝐒𝐄𝐍𝐓', `${usedPrefix}mulaiabsen`]
            ], m)
            
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')
            let caption = `*${htjava} ABSEN TANGGAL ${date}*\n
${conn.absen[id][2]}

*${htjava} SUDAH ABSEN ${htjava}*
*Total:* ${absen.length}

${dmenut}
${list}
${cmenua}
`
`
await conn.sendButton(m.chat, caption, author, `${imgr + '𝐀𝐁𝐒𝐄𝐍𝐓 𝐋𝐈𝐒𝐓'}`, [['𝐇𝐀𝐃𝐈𝐑', `${usedPrefix}absen`], ['𝐌𝐄𝐍𝐔', `${usedPrefix}menu`]], m, { mentions: conn.parseMention(caption) })

}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^(cekabsen)$/i
handler.group = true
export default handler
