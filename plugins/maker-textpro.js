let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

  if (!args[0]) return m.reply(`*MAKER TEXTPRO 🎨*

*Example : ${usedPrefix + command} neon helo*

*LIST EFEK:*
bear
berry
blackpink
blood
broken
carbon
christmas
circuit
devil
discovery
dropwater
embossed
fiction
firework
glossy
glue
gradient
greenhorror
harrypotter
imglitch
light
magma
metallic
neon
paper
skeleton
sketch
stone
transformer
videogame`)

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
        let images = `https://api-xcoders.xyz/api/textpro/${thm}?text=${text1}&apikey=${global.xckey}`
        let caption = `*${command}*
*ǫᴜᴇʀʏ* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`],
                ['𝗠𝗘𝗡𝗨', `${usedPrefix}menu`]
            ], m, fdoc)
            }

handler.command = /^(textpro|textprome)$/i

export default handler