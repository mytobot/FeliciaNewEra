let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

  if (!args[0]) return m.reply(`*MAKER EPHOTOX2 🎨*
  
*Example : ${usedPrefix + command} efek|text1|text2*

*LIST EFEK:*
3d-wood2
3dgalaxy-metal
3dgold
3drose-gold
3dsilver
3dspace
3dstone
3dvintage-light-bulb
avengers
balloon-text
balloons-cards
balloons-love
bear
blueglass-effect
buffalo
bull
captain-america
chicken
cutegirl-graffiti
cyanglass-effect
dragon
eagle
floral-ornamental
football-club
graffiti-text6
greenglass-effect
griffin
gun
heated-steel
hornet
horse
jaguar
juventus
life-buoys
lion2
lion
marvel
messi
metal-marvel
metal-molding
monkey
ninja-black&white
orangeglass-effect
phoenix
pinkglass-effect
pornhub
premier-leaguecup
pubg-black&white
purpleglass-effect
real-madrid
redglass-effect
rhino
sabertooth
shark
spider-man
tattoo-hand
text-logo
tiger-logo
tiktok
typography-greenleaf
wolf-black&white
wolf-galaxy
wolf-logo
wolver
yellowglass-effect`)
  
  let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
  
        let images = `https://violetics.pw/api/ephoto360/${thm}?apikey=beta&text=${text1}&text2=${text2}`
        let caption = `*${command}*
*ǫᴜᴇʀʏ* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`],
                ['𝗠𝗘𝗡𝗨', `${usedPrefix}menu`]
            ], m, fdoc)
            }

handler.help = ['ephotox2']
handler.tags = ['maker']
handler.command = /^(ephotox2|ephotoh2)$/i

handler.limit = true

export default handler