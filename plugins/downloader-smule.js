import fetch from 'node-fetch'

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!args[0]) throw `*Example: ${usedPrefix}${command} http://i.coco.fun/short/1513tui/*`
if (!args[1]) return conn.sendButton(m.chat, htki + ' 𝐒𝐌𝐔𝐋𝐄 ' + htka, null, null, [['𝐕𝐈𝐃𝐄𝐎', `.smule ${args[0]} video`],['𝐀𝐔𝐃𝐈𝐎', `.smule ${args[0]} audio`]],m)
let res = await fetch(`https://api.lolhuman.xyz/api/smule?apikey=${global.lolkey}&url=${args[1]}`)
    let x = await res.json()
  if (args[1] == 'video') {
    await conn.sendButtonVid(m.chat, x.result.video, `*${htki} SMULE ${htka}*
*title:* ${x.result.title}
    `, author, 'To mp3', '.tomp3', fpayment, adReply)
  }
  if (args[1] == 'audio') {
    await conn.sendFile(m.chat, x.result.audio, 'audio.mp3', '', m, null, { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: x.result.audio
     }}
  })
  }
  }
handler.help = ['smule'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((smule)(downloder|dl)?)$/i

export default handler
