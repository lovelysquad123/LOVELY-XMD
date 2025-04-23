```javascript
module.exports = {
  name: "itunes",
  execute: async (sock, msg) => {
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const args = text.split(" ").slice(1).join(" ");
    if (!args) {
      await sock.sendMessage(msg.key.remoteJid, { text: "🎵 *Usage:* `.itunes <song name>`" });
      return;
    }
    // Example response
    await sock.sendMessage(msg.key.remoteJid, { text: `🎵 Searching iTunes for: ${args}` });
  }
};
```
