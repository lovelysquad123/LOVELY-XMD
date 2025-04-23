```js
module.exports = {
    name: "menu",
    execute: async (sock, msg) => {
        const menuText = `
🫟 *Welcome to LOVELY-XMD* 🫟

*╭─「 Status Details 」*
*│* 👾 *Bot* = LOVELY-XMD
*│* 👤 *User* = msg.pushName
*│* ☎️ *Owner Number* ={msg.key.remoteJid}
*│* ⏰ *Uptime* = process.uptime().toFixed(0) seconds
*│* 📂 *RAM* ={(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
*│* ✒️ *Prefix* = .
*╰──────────●●►*

❯❯◦ AI MENU
❯❯◦ AUDIO MENU
❯❯◦ DOWNLOAD MENU
❯❯◦ FUN MENU
❯❯◦ GROUP MENU
❯❯◦ HEROKU MENU
❯❯◦ IMAGE MENU
❯❯◦ OTHER MENU
❯❯◦ OWNER MENU
❯❯◦ REACTION MENU
❯❯◦ SEARCH MENU
❯❯◦ SETTINGS MENU
❯❯◦ TOOLS MENU
❯❯◦ VIDEO MENU

*☠︎︎ Powered by DILSHAN 〽️Ｄ*
        `;
        await sock.sendMessage(msg.key.remoteJid, { text: menuText });
    }
};
```
