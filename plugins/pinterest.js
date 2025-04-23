```javascript
module.exports = {
  name: "pinterest",
  execute: async (sock, msg) => {
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const args = text.split(" ").slice(1).join(" ");
    if (!args) {
      await sock.sendMessage(msg.key.remoteJid, { text: "📌 *Usage:* `.pinterest <image URL>`" });
      return;
    }
    // Example response
    await sock.sendMessage(msg.key.remoteJid, { text: `📥 Downloading image from Pinterest: ${args}` });
  }
};
```
