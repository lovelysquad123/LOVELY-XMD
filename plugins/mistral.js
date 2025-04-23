```javascript
const axios = require('axios');

module.exports = {
  name: "mistral",
  execute: async (sock, msg) => {
    try {
      const prompt = msg.message.conversation || msg.message.extendedTextMessage?.text;
      const query = prompt.replace('.mistral', '').trim();

      if (!query) {
        return await sock.sendMessage(msg.key.remoteJid, {
          text: "🧠 தயவுசெய்து ஒரு கேள்வியை வழங்கவும். உதாரணம்: `.mistral What is quantum computing?`"
        });
      }

      const response = await axios.post("https://api.mistral.ai/generate", {
        prompt: query
      }, {
        headers: {
          Authorization: `Bearer YOUR_MISTRAL_API_KEY`
        }
      });

      const answer = response.data.text;

      await sock.sendMessage(msg.key.remoteJid, {
        text: `🧠 Mistral Answer:\n${answer}`
      });

    } catch (error) {
      console.error(error);
      text: "❌ பதிலை பெற முடியவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்."
      );
    ;
“`
