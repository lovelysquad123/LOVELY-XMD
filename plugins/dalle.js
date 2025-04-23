```javascript
const axios = require('axios');

module.exports = {
  name: "dalle",
  execute: async (sock, msg) => {
    try {
      const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
      const prompt = text.replace('.dalle', '').trim();

      if (!prompt) {
        return await sock.sendMessage(msg.key.remoteJid, {
          text: "🖌️ தயவுசெய்து ஒரு பிரமாணவாக்கியம் (prompt) கொடுங்கள்.\n\nตัวอย่าง:\n`.dalle A futuristic robot in Tokyo night`"
        });
      }

      const res = await axios.post("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2", {
        inputs: prompt
      }, {
        headers: {
          Authorization: `Bearer YOUR_HUGGINGFACE_API_KEY` // 👉 இதை உங்கள் API key-ஆக மாற்றவும்
        },
        responseType: 'arraybuffer'
      });

      const buffer = Buffer.from(res.data, 'binary');

      await sock.sendMessage(msg.key.remoteJid, {
        image: buffer,
        caption: `🎨 Generated image from prompt:\n"${prompt}"`
      });

    } catch (error) {
      console.log(error);
      await sock.sendMessage(msg.key.remoteJid, {
