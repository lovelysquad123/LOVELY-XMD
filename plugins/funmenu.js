```javascript
module.exports = {
  name: "funmenu",
  execute: async (sock, msg) => {
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

    if (!text) return;

    const command = text.trim().toLowerCase();

    if (command === '.funmenu') {
      const menu = `
🫟 *Welcome to LOVELY-XMD FUN MENU* 🫟

*╭─「 Status Details 」*
*│* 👾 *\`Bot\`* = LOVELY-XMD
*│* 👤 *\`User\`* = msg.pushName
*│* ☎️ *Owner Number* ={msg.key.remoteJid}
*│* ⏰ *\`Uptime\`* = process.uptime().toFixed(0) seconds
*│* 📂 *R̀AM*̀ ={(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
*│* ✒️ *\`Prefix\`* = .
*╰──────────●●►*

🎉 *Fun Options:*

🔹 .dare
🔹 .fact
🔹 .jokes
🔹 .pickupline
🔹 .memes
🔹 .quotes
🔹 .trivia
🔹 .truth
🔹 .truthdetector
🔹 .xx9c

*☠︎︎ Powered by DILSHAN 〽️Ｄ*
      `;
      await sock.sendMessage(msg.key.remoteJid, { text: menu });
      return;
    }

    const responses = {
      '.dare': ['🎤 Sing a song and send a voice note!',
        '💃 Record a dance video and share it!',
        '📸 Take a selfie making a funny face!',
        '🎨 Draw something blindfolded and share it!',
        '🗣️ Imitate your favorite actor and send a voice note!'
      ],
      '.fact': [
        '📚 Fact: Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs.',
        '📚 Fact: Bananas are berries, but strawberries are not.',
        '📚 Fact: A group of flamingos is called a "flamboyance".'
      ],
      '.jokes': [
        '😂 Joke: Why did the scarecrow win an award? Because he was outstanding in his field!',
        '😂 Joke: I told my computer I needed a break, and it said "No problem, I’ll go to sleep."',
        '😂 Joke: Why don’t scientists trust atoms? Because they make up everything!'
      ],
      '.pickupline': [
        '💘 Pickup Line: Are you a magician? Because whenever I look at you, everyone else disappears.',
        '💘 Pickup Line: Do you have a map? I just got lost in your eyes.',
        '💘 Pickup Line: Are you a time traveler? Because I see you in my future.'
      ],
      '.memes': [
        '🖼️ Meme: [Insert meme image or link here]',
        '🖼️ Meme: [Insert another meme image or link here]',
        if (responses[command]) {
      const reply = responses[command][Math.floor(Math.random() * responses[command].length)];
      await sock.sendMessage(msg.key.remoteJid, { text: reply });
    }
  }
};
```
