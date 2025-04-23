```javascript
const axios = require('axios');

module.exports = {
  name: "llama",
  execute: async (sock, msg) => {
    try {
      const prompt = msg.message.conversation || msg.message.extendedTextMessage?.text;
      const query = prompt.replace('.llama', '').trim();

      if (!query) {
        return await sock.sendMessage(msg.key.remoteJid, {
        text: "🦙 தயவுசெய்து ஒரு கேள்வியை வழங்கவும். Eg: `.llama Explain relativity`"
        );
      

      const response = await axios.post("https://api.llama.ai/generate", 
        prompt: query
      , 
        headers: 
          Authorization: `Bearer YOUR_LLAMA_API_KEY`
        );

      const answer = response.data.text;

      await sock.sendMessage(msg.key.remoteJid, 
        text: `🦙 LLaMA Answer:{answer}`
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
