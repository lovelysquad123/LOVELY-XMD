```javascript
const moment = require('moment-timezone');
const os = require('os');

module.exports = {
  name: "othermenu",
  execute: async (sock, msg) => {
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const jid = msg.key.remoteJid;

    if (!text) return;

    // Show the menu
    if (text === '.othermenu') {
      const menu = `
⚙️ *Welcome to LOVELY-XMD OTHER MENU* ⚙️

*╭─「 Status Details 」*
*│* 👾 *\`Bot\`* = LOVELY-XMD
*│* 👤 *\`User\`* = msg.pushName
*│* ☎️ *Owner Number* ={jid}
*│* ⏰ *Uptime\`* = process.uptime().toFixed(0) seconds
*│* 📂 *RAM*̀ ={(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
*│* ✒️ *Prefix\`* = .
*╰──────────●●►*

🛠️ *Other Commands:*

🔹 .botstatus
🔹 .pair
🔹 .ping
🔹 .alive
🔹 .repo
🔹 .time

*☠︎︎ Powered by DILSHAN 〽️Ｄ*
      `;
      await sock.sendMessage(jid, { text: menu });
    }

    // .botstatus
    if (text === '.botstatus') {
      const status = `
📊 *Bot Status*

• 🧠 Uptime: process.uptime().toFixed(0) seconds
• 📦 RAM Usage:{(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• 💻 Platform: os.platform(){os.arch()}
• 🔌 CPU Cores: os.cpus().length
      `;
      await sock.sendMessage(jid,  text: status );
    

    // .pair
    if (text === '.pair') 
      await sock.sendMessage(jid,  text: "🔗 *Pairing session initiated...* this command only if instructed to!" );
    

    // .ping
    if (text === '.ping') 
      const start = Date.now();
      await sock.sendMessage(jid,  text: "🏓 Pong!" );
      const end = Date.now();
      await sock.sendMessage(jid,  text: `⏱️ Response time:{end - start}ms` });
    }

    // .alive
    if (text === '.alive') {
      const aliveText = `
✅ *LOVELY-XMD BOT IS ACTIVE*

• Creator: DILSHAN
• Bot Name: LOVELY-XMD
• Prefix: .
• Uptime: process.uptime().toFixed(0) seconds

💖 I'm always here for you!
      `;
      await sock.sendMessage(jid,  text: aliveText );
    

    // .repo
    if (text === '.repo') 
      const repoLink = "https://github.com/lovelysquad123/LOVELY-XMD";
      await sock.sendMessage(jid,  text: `📁 *GitHub Repository:*{repoLink}` });
    }

    // .time
    if (text === '.time') {
      const indiaTime = moment().tz('Asia/Kolkata').format('HH:mm:ss A, dddd, MMMM Do YYYY');
      await sock.sendMessage(jid, { text: `🕰️ *Current IST Time:*\n${indiaTime}` });
    }
  }
};
```
