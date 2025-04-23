```js
const { default: makeWASocket, useMultiFileAuthState } = require('@adiwajshing/baileys');
const P = require('pino');
const fs = require('fs');
const path = require('path');

// SETTINGS
const BOT_NAME = 'LOVELY-XMD';
const OWNER_NUMBER = '94764642432'; // உங்க எண் இங்கே வைங்க

// PLUGIN PATH
const pluginsPath = path.join(__dirname, 'plugins');

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

async function startBot() {
const  state, saveCreds  = await useMultiFileAuthState('./session');
    const sock = makeWASocket(
        auth: state,
        printQRInTerminal: true,
        logger: P( level: 'silent' ),
    );

    sock.ev.on('creds.update', saveCreds);
    loadPlugins(sock);

    console.log(`✅{LOVELY_XMD} bot started by DILSHAN`);
}

startBot();
```
