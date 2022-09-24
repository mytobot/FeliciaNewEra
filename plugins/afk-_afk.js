export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
*MODE AFK 📵*\n
  Kamu Berhenti AFK${user.afkReason ? ' Setelah ' + user.afkReason : ''}
  ⌛ Selama ${(new Date - user.afk).toTimeString()}
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
 *MODE AFK 📵*\n
  Dia Sedang AFK ${reason ? 'Dengan Alasan ' + reason : 'Tanpa Alasan'}
  ⌛ Selama ${(new Date - afkTime).toTimeString()}
  `.trim())
    }
    return true
}
