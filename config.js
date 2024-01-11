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
  botname: process.env.BotName || "✪𝘀𝗽𝗮𝗰𝗲➳𝗺𝗮𝗿𝗸𝗲𝘁✦.         𝐕𝐄𝐍𝐓𝐄 𝐃𝐄 𝐂𝐎𝐌𝐏𝐓𝐄𝐒", 
  author: process.env.Author || "Lionel 👻",
  packname: process.env.PackName || "Lionel 👻",
  socialLink: process.env.Web || "https://github.com/Toge123456",
  footer: process.env.Footer || "𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀",
  prefa: process.env.Prefix || ['&'],
  themeemoji: process.env.ThemeEmoji || "✨",
  ownername: process.env.Owner_Name || "Lionel 👻",
  ownernumber: process.env.Owner_Number || "24105114159",
  instagramId: process.env.Insta || "lawliet.kfx",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://toge3260:QO4ozHWxuoQeHsry@cluster0.4bedvpu.mongodb.net/?retryWrites=true&w=majority",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEp1Q3pWUHNhajRGSGpjWmYxWlV_AN_YA_5akp3V_AN_YA_jJ5N2ozZ3V_AN_YA_pMV_AN_YA_ppZU5pSDJFbz0ifSwicHV_AN_YA_ibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekV_AN_YA_5dkpCWFF2a0lCV_AN_YA_mxvMHFvTm1lZzNaajJmdnZzS25MaUZhMW5tT3pV_AN_YA_OD0ifX0sInBhaXJpbmdFcGhlbWV_AN_YA_yYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBR3NOYXNacUh4YXlMM1BMYXJrM1Y0V_AN_YA_GRwWS9pTC9BT0kzdWJBV_AN_YA_ldXZldJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5clltZFQxQnJxYkpHblV_AN_YA_ocW1lME1UcGlSN0NHL2pNMnF4N2lMbUFkTUhvPSJ9fSwic2lnbmV_AN_YA_kSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnV_AN_YA_mZmV_AN_YA_yIiwiZGF0YSI6IkdIU3kxSC9GS0JnU2ZURERUYkZ5TDFmSk4zNTNTY0pmcjJqYWpV_AN_YA_TXRTM2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnV_AN_YA_mZmV_AN_YA_yIiwiZGF0YSI6IjV_AN_YA_V_AN_YA_V_AN_YA_jlPRktBajh1V_AN_YA_WNFZzR5SHJaUWI5YWNnMV_AN_YA_lobWxvMXNWK0E5dWZUeWc9In19LCJzaWduZWRQcmV_AN_YA_LZXkiOnsia2V_AN_YA_5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tlb0x1Q2ZCQ01icUxpcjZuV_AN_YA_WFJWEFmQnFYV_AN_YA_zZEa0d5V_AN_YA_Ed3QXJqTlhrUT0ifSwicHV_AN_YA_ibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjdENlFEUnNac0dvelBuUnh2ZGdGY2U2V_AN_YA_lJjYmhKNGJqQ1pmbDZrZk1qV_AN_YA_T0ifX0sInNpZ25hdHV_AN_YA_yZSI6eyJ0eXBlIjoiQnV_AN_YA_mZmV_AN_YA_yIiwiZGF0YSI6ImFONlcvSzRFSW1DbkpLdmlTMGZrT1ZneUNJQUFwMm5vM1k2NWhaZEZxTlFUMjV_AN_YA_qc0M4Z2tOcnkrQmtqNDNkV_AN_YA_3BYR05CRS9tQndjbGt3TGxhRi9Zc2lBPT0ifSwia2V_AN_YA_5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiJRYWhPbTMxLzdyZ3E5ZV_AN_YA_hGZFJjRTV_AN_YA_jRytTcGoyU0RYMWRV_AN_YA_UU9BdGtxTDlZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmV_AN_YA_LZXlJZCI6MzEsImZpcnN0V_AN_YA_W51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3V_AN_YA_udFN5bmNDb3V_AN_YA_udGV_AN_YA_yIjowLCJhY2NvdW50U2V_AN_YA_0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV_AN_YA_2aWNlSWQiOiIzeTNGUmlScFM4aTFfeThQN2FpRHJ3IiwicGhvbmV_AN_YA_JZCI6IjhmYWNhMmV_AN_YA_mLWQ4YzUtNGQxMS05YjUxLWQ3OGV_AN_YA_iYTM3N2MwMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5TmZHdWRiS3hWTV_AN_YA_dLckV_AN_YA_1bStJTGV_AN_YA_mV_AN_YA_DdOT1k9In0sInJlZ2lzdGV_AN_YA_yZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnV_AN_YA_mZmV_AN_YA_yIiwiZGF0YSI6IitjN09ESGgwR0I2Ny83ZWhV_AN_YA_QnhtU09vallpOD0ifSwicmV_AN_YA_naXN0cmF0aW9uIjp7fSwiYWNjb3V_AN_YA_udCI6eyJkZXRhaWxzIjoiQ0xHN3BaQUV_AN_YA_FSW45aUt3R0dCTWdBQ2dBIiwiYWNjb3V_AN_YA_udFNpZ25hdHV_AN_YA_yZUtleSI6IjBKZnBBYWdzMzBNTTNDQklCL1BITE1rRlNISmp6ei9XdUlLMTNiYThna1k9IiwiYWNjb3V_AN_YA_udFNpZ25hdHV_AN_YA_yZSI6IjFqY1JoTm1CMllnYk5seFZxcDJXQWV_AN_YA_1c21ZM2cvNDV_AN_YA_DcldKL3RDR0tvNmFUdi9UR1hlUUY4QjUzZ1A2amRMV_AN_YA_jBPRV_AN_YA_ZzSjRFKy83cjM1eTd2NDJoQUJRPT0iLCJkZXZpY2V_AN_YA_TaWduYXR1cmUiOiJCU2V_AN_YA_3dU1OaURSSFJhS1JlbWN4Z1V_AN_YA_URk9ZeTNwUHNMY3IwN3JnRkV_AN_YA_yeHZ5Uy9FMnZQUXFyV_AN_YA_S9JSEpEOGRlSkFEUU9UdXBMV_AN_YA_WNyWV_AN_YA_MyK3dXK0swYW9qdz09In0sIm1lIjp7ImlkIjoiMTcyNDU0MjM2NjM6NDlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2V_AN_YA_i/CdlYbwnZS+8J2UvCDwnZWA4oSV_AN_YA_8J2V_AN_YA_jPCdlYTwnZS48J2V_AN_YA_gvCdlYAifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTcyNDU0MjM2NjM6NDlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2V_AN_YA_JZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZENYNlFHb0xOOURETndnU0Fmenh5ekpCV_AN_YA_Wh5WTg4LzFyaUN0ZDIydklKRyJ9fV_AN_YA_0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWV_AN_YA_zdGFtcCI6MTcwMzAzNDUwOH0=", 
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

