//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sirtheprogrammer:01319943591@cluster0.p2rjers.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://sirtheprogrammer:01319943591@cluster0.p2rjers.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/04e09c20e70de180ee319.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "2556738110094";
global.owner = process.env.OWNER_NUMBER || "255738110094";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "255738110094";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "255738110094";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU9Mbk5OTmRxdXh5QldLZ0lxTEVDM2lsWTdwM3ZtS3creG5qNGprOXdXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZTL0FLaFNJV0NacWRJVDdreUxRT2JXQzh5NzFqNjVaK2J4cjBhRUoyTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Q21RSVNSRlF2RzZva285cmdJOU5hT0JaSDM1S3Z4S0pTakt5SnhGZlZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKU2pHVExKMFhpdXJ6YlZ2Y05CQVVPcDVBR0xnV0hINFN2aTgra1RTbG5ZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhERGFMK0NpREFaV1BzV01NNm83NHhVU0V4Mjcydk9qNEJJd3I4bFM5blk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQxNDY1TFp3ZU90N254cmhuNUtRcXErcVNFV0tYbHFpRG1EWG53TzloMFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0FQMFpxblZFUHVNMHNZYituZ28yQm9JdCs2VmRrdFZXcXBZdi90NlRIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWm0yQ0p5enlTVEs2b3NiRlc4SzNRakM0cUMyZ2RjSFphQVRSRXM5T0gzWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVOL3dRYjBISmM0cjR6ODd5UzViY1NiRWJSdmQ2dGV2OWhGQ05RUGJoSElMNVF4Q2lia2p6Ym9na21WcGg1WDRtV0dRYS9ZYzdEVk52TUpTQ1doNUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiJkT0tGLzcvZitNTnVkUXBFSHY3Ni9pa1F3eWNVMEJjRTJmVGtqdXl3ZXhnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTczODExMDA5NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQTg1NEU0MUZCNjU5NzcxNjk5M0Q3NzEzRTBFMEFENSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE3NDc1NzY0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLX25LSFlFaFExaUlZSlB2WmlXak5RIiwicGhvbmVJZCI6IjYwMDAyMDY5LTgzNmUtNGJjZS04NWFlLWU0M2M2NmM3ZmJmYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiTTFZUGp3VEo0NlFmd2pydkxHSk1ldVFHVmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOU9lcGNnczkrV1Z2M0d2a1ZxV0JhRTRKaTAwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFHVDEyTUM3IiwibWUiOnsiaWQiOiIyNTU3MzgxMTAwOTQ6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJzYnJrMjU1In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOQ3hoNTBDRUtPeitySUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyNWRNZUUrcldzN25pUUUzem5Yem1KdzFSWEFldDIxSFJHdjd0L3JHdUV3PSIsImFjY291bnRTaWduYXR1cmUiOiJZcXBuWmJGRnVQTmN5WjUvejcyOWgraCtvL1BwbWQrM29lVE1ja1pkSVRRR013bDVyaUh5cHY4UGpiS0d3cTlIRGN4cWc0M05hY2YwUFduWDhhZnFCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOVlUelVFZ1RDVTE5emhWb28yRjJQMlc3NFhGTFkwMmh2dFFzRlNTclF1UjRaSHVFMEFvdkF2ZTU1U3RhYXp3WEErdWw0Qm5SVkMyS2JaQXc0NjVkRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3MzgxMTAwOTQ6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhK1hUSGhQcTFyTzU0a0JOODUxODVpY05VVndIcmR0UjBScis3ZjZ4cmhNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3NDc1NzYwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFYQiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "sirtheprogrammer",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "PROHACKER",
  ownername: process.env.OWNER_NAME || "SBRK255",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "345f70f1c3f2ecef4d718d33c14026f9",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
