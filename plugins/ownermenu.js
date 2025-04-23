```javascript
const os = require('os');
const moment = require('moment-timezone');

module.exports = {
  name: "ownermenu",
  execute: async (sock, msg) => {
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const jid = msg.key.remoteJid;

    if (!text) return;

    // Show the owner menu
    if (text === '.ownermenu') {
      const menu = `
👑 *Welcome to LOVELY-XMD OWNER MENU* 👑

*╭─「 Status Details 」*
*│* 👾 *\`Bot\`* = LOVELY-XMD
*│* 👤 *\`User\`* = msg.pushName
*│* ☎️ *Owner Number* ={jid}
*│* ⏰ *\`Uptime\`* = process.uptime().toFixed(0) seconds
*│* 📂 *R̀AM*̀ ={(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
*│* ✒️ *\`Prefix\`* = .
*╰──────────●●►*

🛠️ *Owner Commands:*

🔹 .block
🔹 .unblock
🔹 .delete
🔹 .biography
🔹 .deljunk
🔹 .disk
🔹 .dlvo
🔹 .vv2
🔹 .update
🔹 .gcaddprivacy
🔹 .getsession
🔹 .groupid
🔹 .hostip
🔹 .join
🔹 .lastseen
🔹 .leave
🔹 .listbadword
🔹 .listignorelist
🔹 .listsudo
🔹 .modestatus
🔹 .online
🔹 .owner
🔹 .ppprivacy
🔹 .react
🔹 .readreceipts
🔹 .reportbug
🔹 .request
🔹 .restart
🔹 .setbio
🔹 .setprofilepic
