```javascript
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const { downloadMediaMessage } = require('@adiwajshing/baileys'); // Adjust based on your bot's implementation

module.exports = {
  name: "imagemenu",
  execute: async (sock, msg) => {
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const jid = msg.key.remoteJid;

    if (!text) return;

    // .imagemenu command
    if (text === '.imagemenu') {
      const menu = `
🖼️ *Welcome to LOVELY-XMD IMAGE MENU* 🖼️

*╭─「 Status Details 」*
*│* 👾 *\`Bot\`* = LOVELY-XMD
*│* 👤 *\`User\`* = msg.pushName
*│* ☎️ *Owner Number* ={jid}
*│* ⏰ *\`Uptime\`* = process.uptime().toFixed(0) seconds
*│* 📂 *R̀AM*̀ ={(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
*│* ✒️ *\`Prefix\`* = .
*╰──────────●●►*

🎨 *Image Options:*

🔹 .remini [send image with caption]
🔹 .wallpaper [keyword]
🔹 .wikimedia [keyword]

*☠︎︎ Powered by DILSHAN 〽️Ｄ*
`;
      await sock.sendMessage(jid, { text: menu });
    }

    // .remini command
    if (text.startsWith('.remini')) {
      if (!msg.message.imageMessage) {
        return sock.sendMessage(jid, { text: "❌ Please send an image with the caption '.remini'." });
      }

      try {
        const buffer = await downloadMediaMessage(msg.message.imageMessage);
        const form = new FormData();
        form.append('image', buffer, { filename: 'image.jpg' });

        // Replace with actual API endpoint and key
        const response = await axios.post('https://api.example.com/remini', form, {
          headers: {
            ...form.getHeaders(),
            'Authorization': 'Bearer YOUR_API_KEY'
          },
          responseType: 'arraybuffer'
        });

        await sock.sendMessage(jid, { image: Buffer.from(response.data), caption: '✨ Enhanced by Remini' });
      } catch (error) {
        console.error(error);
        await sock.sendMessage(jid, { text: "❌ Failed to enhance the image." });
      }
    }

    // .wallpaper command
    if (text.startsWith('.wallpaper ')) {
      const query = text.slice(10).trim();
      if (!query) return sock.sendMessage(jid, { text: "❌ Please provide a keyword for the wallpaper." });

      try {const response = await axios.get(`https://api.unsplash.com/photos/random?query=encodeURIComponent(query)   client_id=YOUR_UNSPLASH_API_KEY`);
        const imageUrl = response.data.urls.full;

        await sock.sendMessage(jid,  image:  url: imageUrl , caption: `🖼️ Wallpaper for "{query}"` });
      } catch (error) {
        console.error(error);
        await sock.sendMessage(jid, { text: "❌ Failed to fetch wallpaper." });
      }
    }

    // .wikimedia command
    if (text.startsWith('.wikimedia ')) {
      const query = text.slice(10).trim();
      if (!query) return sock.sendMessage(jid, { text: "❌ Please provide a keyword for Wikimedia search." });

      try {
        const response = await axios.get(`https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&generator=search&gsrsearch=encodeURIComponent(query)   gsrlimit=1   iiprop=url`);
        const pages = response.data.query?.pages;

        if (pages) 
          const page = Object.values(pages)[0];
          const imageUrl = page.imageinfo[0].url;

          await sock.sendMessage(jid,  image:  url: imageUrl , caption: `🖼️ Wikimedia image for "{query}"` });
        } else {
          await sock.sendMessage(jid, { text: "❌ No images found on Wikimedia." });
        }} catch (error) {
        console.error(error);
        await sock.sendMessage(jid, { text: "❌ Failed to fetch image from Wikimedia." });
      }
    }
  }
};
```
