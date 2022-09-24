let isJoin = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
import fs from 'fs'

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin, isOwner }) {

    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAutoJoin = isJoin.exec(m.text)

    if (chat.autoJoin && isAutoJoin) {
        await conn.sendButton(m.chat, `*Bot Auto Join Detect*`, wm, null, [
                ['𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐔𝐓𝐎𝐉𝐎𝐈𝐍', `${usedPrefix}off autojoin`],
                ['𝐁𝐎𝐓 𝐉𝐎𝐈𝐍', `${usedPrefix} ${isJoin}`],
            ], m)
            }
    return !0
}






