import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')
 await conn.sendButton(m.chat, `*SN:* ${sn}\n`,wm + '\n\n' + titlebot, serialimg, [['𝐓𝐇𝐀𝐍𝐊𝐒','Ok'],['𝐂𝐎𝐏𝐘 𝐒𝐍','.sn']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: 'CEK SN',
                        body: hiasan,          previewType: 0,
                        sourceUrl: swb
                      }}
})
}


handler.help = ['ceksn']
handler.tags = ['xp']
handler.command = /^(ceksn)$/i
handler.register = true
export default handler