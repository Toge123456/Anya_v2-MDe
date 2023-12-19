const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "𝚈𝚄𝙼𝙴𝙺𝙾", 
  author: process.env.Author || "𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀",
  packname: process.env.PackName || "𝚈𝚄𝙼𝙴𝙺𝙾",
  socialLink: process.env.Web || "https://github.com/Toge123456",
  footer: process.env.Footer || "𝚈𝚄𝙼𝙴𝙺𝙾",
  prefa: process.env.Prefix || ['.'],
  themeemoji: process.env.ThemeEmoji || "✨",
  ownername: process.env.Owner_Name || "𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀",
  ownernumber: process.env.Owner_Number || "17245423663",
  instagramId: process.env.Insta || "lawliet.kfx",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://Etoundi:Benzimen@cluster0.lbapl7i.mongodb.net/?retryWrites=true&w=majority",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjo_AN_YA_iS01lN1RiRUtNZERCU2Z6VjlOVTRUZDZtSTBweUtqWWFSbHF4VFJVeXAxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjo_AN_YA_iRE9yRkZSM1FjcStpYXhTazVTdG4wR1h2b0ho_AN_YA_QmJUc254dWR3WDZNTkpSZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTG1RQURhU1czanhPUk8ybDFxVzBNenFrZnFXUERVOWdBb1RPNHNUMkdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2U3NyMkduanJ3L3AxK2VWRzkwU0hqbkNwRXJuNzdQM0Nld1ZOR0tXT1E4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjo_AN_YA_iQnVmZmVyIiwiZGF0YSI6IjRCUVJKZ3ZaOVNqTnlrblZyd3FYaXR4ZVFaalFnUFZEQUUxck8wcGR1VmM9In0sInB1YmxpYyI6eyJ0eXBlIjo_AN_YA_iQnVmZmVyIiwiZGF0YSI6IkdiUzFHbm1WVmxzejNHMFVjdm9YYmhKUC9qUEQxSjVUeHI0dFNPWjIyVTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjo_AN_YA_iR01zOVl0T0tHQ3FMekR3ejhneGZsd3VxZ2lxc3VsN1VzNnhSaDB5QUhHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjo_AN_YA_iTEVWcDVtMlNzYXJ3Q1Ftbko_AN_YA_4VHFhNENydVB0UjFJVkJzdmto_AN_YA_WmJjNXhHYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjo_AN_YA_iQnVmZmVyIiwiZGF0YSI6IkFXV2RjQVJ6ZlFzZWUwZCtqYjNFY0xqaHg3VFJhSnRqd3ZTb1ZaTFJxNnh3MjZIcWhKYUpybnpYOEU2dFJ5MHUxak1yTGJNaS9hOFFEMDNkZ25zR2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6Ikdo_AN_YA_UUY0TTIxYVZCYzlo_AN_YA_T0dyOHo_AN_YA_ycU1PWkt1SUFlY2I2RnFxN3hHK25vd1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo_AN_YA_zMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImFKN2h5YURsVDNpblZTZTVmZ2pDeVEiLCJwaG9uZUlkIjo_AN_YA_iMzYxNTNiZTItNzAwZi00ZWZmLWEyMzUtMDVmMmE3OGU4ZjUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjo_AN_YA_iQnVmZmVyIiwiZGF0YSI6IjNCYjFIYVFKQnNOa055MkpReGg5UzhsZ2lo_AN_YA_ST0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjo_AN_YA_iaXNLMFhBc2Z0V3F6VXQrbVlxZXMwZStkZ0QwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXJwczgwSEVOdkdo_AN_YA_YXdHR0JNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijo_AN_YA_iMFpQY2JJbTAyc3ZiTzZ1d0VMamV2Y2xJcW1UZVR0S3RIZWsyWml2MzZnOD0iLCJhY2NvdW50U2lnbmF0dXJlIjo_AN_YA_id0c4K0Y4QnlyRmJzMHI3NUJ3M2RTZUhOY3pxYTNkUTVuZmRRMTNo_AN_YA_UEZHcjFDbkJsL0lmcHA5aDJjQno_AN_YA_rTDVSZGdJSXM4Si9FVUxWdFRNTC8vMFBvQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlNnWllabmxVbG52UXU0SDBDOERGTjJMa1RJVmRDcjBZY1Irdm4xYnQ3YWpveXlkUXRuYyt4OFlCTWFo_AN_YA_NjJlMityYVRnZmJWTXZo_AN_YA_WTlnU2FaRFppRmhRPT0ifSwibWUiOnsiaWQiOiIyNDE2MDIyODg1NTo_AN_YA_xOUBzLndo_AN_YA_YXRzYXBwLm5ldCIsIm5hbWUiOiLwnZqI8J2ahPCdmbzwnZm08J2ZuvCdmb4ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjo_AN_YA_iMjQxNjAyMjg4NTU6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZEdUM0d5SnROckwyenVyc0JDNDNyM0pTS3BrM2s3U3JSM3BObVlyOStvUCJ9fV0sInBsYXRmb3JtIjo_AN_YA_ic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMjk3ODM5OX0=", 
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "Queen Anya" 
global.author = process.env.Author || "@PikaBotz" 
global.packname = process.env.PackName || "Queen Anya v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Queen Anya Bot" 
global.prefa = process.env.Prefix || ['-'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "Pika~Kun" 
global.ownernumber = process.env.Owner_Number || "916900904828" 
global.adress = process.env.Continent || "Asia, India, Assam" 
global.timezone = process.env.TimeZone || "Asia/Kolkata" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

