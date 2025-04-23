javascript
const axios = require('axios');

module.exports = {
  name: "metaai",
  execute: async (sock, msg) => {
    try {
      const prompt = msg.message.conversation || msg.message.extendedTextMessage?.text;
      const query = prompt.replace('.metaai', '').trim();

      if (!query) {
        return await sock.sendMessage(msg.key.remoteJid, {
          text: "🧠 தயவுசெய்து ஒரு கேள்வியை வழங்கவும். உதாரணம்: `.metaai What is AI?`"
        });
      }

      const response = await axios.post("https://api.metaai.com/respond", {
        input: query
      }, {
        headers: {
          Authorization: `Bearer YOUR_METAAI_API_KEY`
        }
      });

      const answer = response.data.response;

      await sock.sendMessage(msg.key.remoteJid, {
        text: `🧠 MetaAI Answer:\n${answer}`
      });

    } catch (error) {
      console.error(error);
      await sock.sendMessage(msg.key.remoteJid, {
        text: "❌ பதிலை பெற முடியவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்."
      });
    }
  }
};
```
