import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `Reply Video/VN Yang Ingin Anda Ubah Ke PTT Dengan Balasan  *${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '*Tidak Dapat Mengunduh Media*'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw '*Tidak Dapat Mengonversi Media Ke Audio*'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']

handler.limit = true
handler.command = /^to(vn|(ptt)?)$/i

export default handler