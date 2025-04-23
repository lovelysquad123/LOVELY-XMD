
```javascript
const { default: makeWASocket, useMultiFileAuthState } = require('@adiwajshing/baileys');
const P = require('pino');

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('session');
  const sock = makeWASocket({
    logger: P({ level: 'silent' }),
    printQRInTerminal: true,
    auth: state
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
if (!text) return;

    if (text === '.menu') {
      const menuText = `
🫟 *Welcome to LOVELY-XMD* 🫟

*╭─「 Status Details 」*
*│* 👾 *\`Bot\`* = LOVELY-XMD
*│* 👤 *\`User\`* = msg.pushName
*│* ☎️ *Òwner Number*̀ ={msg.key.remoteJid}
*│* ⏰ *\`Uptime\`* = process.uptime().toFixed(0) seconds
*│* 📂 *R̀AM*̀ ={(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
*│* ✒️ *\`Prefix\`* = .
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
  });
}

startBot();
`
```js
const { default: makeWASocket, useMultiFileAuthState } = require('@adiwajshing/baileys');
const P = require('pino');
const fs = require('fs');
const path = require('path');

// Plugins path
const pluginsPath = path.join(__dirname, 'plugins');

// Load all plugin files dynamically
function loadPlugins(sock) {
    fs.readdirSync(pluginsPath).forEach(file => {
        if (file.endsWith('.js')) {
            const plugin = require(`./plugins/${file}`);
            if (plugin.execute) {
                sock.ev.on('messages.upsert', async ({ messages }) => {
                    const msg = messages[0];
                    if (!msg.message || msg.key.fromMe) return;
                    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

                    if (text && text.startsWith('.' + plugin.name)) {
                        await plugin.execute(sock, msg);
                    }
                });
            }
        }
    });
}

// Start bot
async function startBot() {
const { state, saveCreds } = await useMultiFileAuthState('./session');
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: P({ level: 'silent' }),
    });

    sock.ev.on('creds.update', saveCreds);
    loadPlugins(sock);

    console.log("✅ LOVELY-XMD bot started!");
}

startBot();
```
