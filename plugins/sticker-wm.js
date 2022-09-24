import { addExif } from '../lib/sticker.js'


let handler = async (m, { conn, text }) => {
  if (!m.quoted) throw '*[❗] Reply Stickernya*'
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw 'Reply Sticker!'
    let img = await m.quoted.download()
    if (!img) throw 'Reply a Sticker!'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
    else throw 'Conversion failed'
  }
}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm|swm|stickerwm|wmsticker|stikerwm|wmstiker$/i
handler.premium = true

export default handler
