```javascript
module.exports = {
  name: "downloadmenu",
  execute: async (sock, msg) => {
    const menu = `
🫟 *Welcome to LOVELY-XMD DOWNLOAD MENU* 🫟

*╭─「 Status Details 」*
*│* 👾 *\`Bot\`* = LOVELY-XMD
*│* 👤 *\`User\`* = msg.pushName
*│* ☎️ *Òwner Number*̀ ={msg.key.remoteJid}
*│* ⏰ *\`Uptime\`* = process.uptime().toFixed(0) seconds
*│* 📂 *R̀AM*̀ ={(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
*│* ✒️ *\`Prefix\`* = .
*╰──────────●●►*

📥 *Download Options:*

🔹 .apk
🔹 .download
🔹 .tikquote
🔹 .facebook
🔹 .gdrive
🔹 .gitclone
🔹 .image
🔹 .instagram
🔹 .itunes
🔹 .mediafire
🔹 .pinterest
🔹 .play
🔹 .playdoc
🔹 .ringtone
🔹 .savestatus
🔹 .tiktok
🔹 .tiktokaudio
🔹 .video
🔹 .videodoc
🔹 .xvideos
🔹 .ytmp3
🔹 .ytmp3doc
🔹 .ytmp4
🔹 .ytmp4doc

*☠︎︎ Powered by DILSHAN 〽️Ｄ*
    `;
    await sock.sendMessage(msg.key.remoteJid, { text: menu });
  }
};
```
