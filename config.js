const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263786997108";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_05_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM3LFxuICAgICAgICA2MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDczLFxuICAgICAgICA4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNixcbiAgICAgICAgMTAzLFxuICAgICAgICA2OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMixcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNixcbiAgICAgICAgMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDk5LFxuICAgICAgICAzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDU3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQbUxsc1ZOL0tTTCtsNXRtV3JDVFNQQ0xRWkJ3SmNPdlllaUdiWVlSRlVzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIaUlwSFFaZlRkbVc0Y3ZmZjJKUElBXCIsXG4gIFwicGhvbmVJZFwiOiBcImIxOGZlNmU4LTFhYzQtNDJlYS05YmY1LWMzMDNiYzcwNjFkOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICAyNyxcbiAgICAgIDExMixcbiAgICAgIDc5LFxuICAgICAgMTg4LFxuICAgICAgMjIwLFxuICAgICAgMjM0LFxuICAgICAgNTAsXG4gICAgICAyMzIsXG4gICAgICA3NSxcbiAgICAgIDQ4LFxuICAgICAgMjM2LFxuICAgICAgMTg3LFxuICAgICAgMTQ4LFxuICAgICAgNzUsXG4gICAgICA1NixcbiAgICAgIDE3MixcbiAgICAgIDEzNyxcbiAgICAgIDEwNyxcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAxNjAsXG4gICAgICAxNjMsXG4gICAgICA0MixcbiAgICAgIDE1MCxcbiAgICAgIDg3LFxuICAgICAgMTYzLFxuICAgICAgMjU0LFxuICAgICAgMjAsXG4gICAgICAxNTEsXG4gICAgICAyMzYsXG4gICAgICAyMDIsXG4gICAgICAxMTMsXG4gICAgICAyMCxcbiAgICAgIDEzNixcbiAgICAgIDIxNyxcbiAgICAgIDE4MyxcbiAgICAgIDUwLFxuICAgICAgOTksXG4gICAgICA2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4SkNQN0NDUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg2OTk3MTA4OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXIgTWFyYWlyZVwiLFxuICAgIFwibGlkXCI6IFwiMTMzOTczMzAwNzcyODgwOjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0o3THQ1WUdFUHk2a2JRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMWVPQXN1Q3Zkd2diTFRybXFDV1NCeWd5T0pmMXFKa2I2VlN1b2twdElHMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYUjl4TFFCM004V3FXL3lUd3J6MHFFb1BITTVTVFZvSUlObHY2WG1VOU9PYW42Yyt5aGdYZ3NOc2w5ZzBuUms4d3dHM2N5MFJteHprb2QxNjZEanFEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBbWpyeTc2eS85N2hMM29JZVMwOWdWbHc1cG9rRU4rTGhDcnlpUDQyaUYza1lzT1IrTFNxc0pvZ2EwdHNhVnVJL2FvMCsyN2c0R1l6ZWhja2FBSFJDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODY5OTcxMDg6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5NTA3MjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQMDFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAwMS5qc29uIjogIntcImtleURhdGFcIjpcIlRWMkZ6MlFZeEcvZWI2WEtramxZbUs4U3Axd2pBaUs0WWR6cWxvTXlFSGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY1NzY2MDgyNixcImN1cnJlbnRJbmRleFwiOjE2LFwiZGV2aWNlSW5kZXhlc1wiOlsxNiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mr Maraire",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
