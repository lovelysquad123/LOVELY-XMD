```javascript
const axios = require('axios');

module.exports = {
  name: "photoai",
  execute: async (sock, msg) => {
    try {
      const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
      const isImage = msg.message.imageMessage || quoted?.imageMessage;

      if (!isImage) {
        return await sock.sendMessage(msg.key.remoteJid, {
          text: "📸 தயவுசெய்து ஒரு புகைப்படத்தை அனுப்பவும் அல்லது ஒரு புகைப்படத்தை reply செய்து *.photoai* கமாண்டை பயன்படுத்தவும்."
        });
      }

      const buffer = await sock.downloadMediaMessage(msg.message.imageMessage ? msg : { message: quoted });

      const form = new FormData();
      form.append('image', buffer, { filename: 'input.jpg' });

      const res = await axios.post('https://api.example.com/photoai', form, {
        headers: form.getHeaders()
      });

      const aiImageUrl = res.data.url;

      await sock.sendMessage(msg.key.remoteJid, {
        image: { url: aiImageUrl },
        caption: "🤖 *AI Avatar Generated!*"
      });

    } catch (error) {
      console.error(error);
      await sock.sendMessage(msg.key.remoteJid, {
        text: "❌ error. plz retry."
      });
    }
  }
};
```
