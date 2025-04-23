“`javascript
const axios = require('axios');

module.exports = 
  name: "deepseek",
  execute: async (sock, msg) => 
    try 
      const prompt = msg.message.conversation || msg.message.extendedTextMessage?.text;
      const query = prompt.replace('.deepseek', ”).trim();

      if (!query) 
        return await sock.sendMessage(msg.key.remoteJid, 
          text: "🔎 தயவுசெய்து ஒரு தேடல் கேள்வியை வழங்கவும். உதாரணம்: `.deepseek Explain black holes`"
        );
      

      const response = await axios.post("https://api.deepseek.com/query", 
        question: query
      , 
        headers: 
          Authorization: `Bearer YOUR_DEEPSEEK_API_KEY`
        );

      const answer = response.data.answer;

      await sock.sendMessage(msg.key.remoteJid, 
        text: `🔎 DeepSeek Answer:{answer}`
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
