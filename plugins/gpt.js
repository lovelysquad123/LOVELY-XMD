```js
const axios = require('axios');

module.exports = {
  name: "gpt",
  execute: async (sock, msg) => {
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const input = text.split('.gpt ')[1];

    if (!input) {
      return await sock.sendMessage(msg.key.remoteJid, {
        text: "❗ Eg: *.gpt Tell me a joke*"
      });
    }

    try {
      const res = await axios.get(`https://api.safone.tech/gpt?prompt=encodeURIComponent(input)`);
      await sock.sendMessage(msg.key.remoteJid,  text: `🤖 *GPT-2:*{res.data.response}` });
    } catch (err) {
      await sock.sendMessage(msg.key.remoteJid, { text: "❌ wrong . retry." });
    }
  }
};
``
