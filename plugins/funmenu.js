```javascript
module.exports = {
  name: "funmenu",
  execute: async (sock, msg) => {
    const menu = `
🫟 *Welcome to LOVELY-XMD FUN MENU* 🫟

*╭─「 Status Details 」*
*│* 👾 *\`Bot\`* = LOVELY-XMD
*│* 👤 *\`User\`* = msg.pushName
*│* ☎️ *Òwner Number*̀ ={msg.key.remoteJid}
*│* ⏰ *\`Uptime\`* = process.uptime().toFixed(0) seconds
*│* 📂 *R̀AM*̀ ={(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
*│* ✒️ *\`Prefix\`* = .
*╰──────────●●►*

🎉 *Fun Options:*

🔹 .dare
🔹 .fact
🔹 .jokes
🔹 .pickupline
🔹 .memes
🔹 .quotes
🔹 .trivia
🔹 .truth
🔹 .truthdetector
🔹 .xx9c

*☠︎︎ Powered by DILSHAN 〽️Ｄ*
    `;
    await sock.sendMessage(msg.key.remoteJid, { text: menu });
  }
};
```
