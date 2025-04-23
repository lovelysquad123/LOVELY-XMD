``javascript
const getLink = require('mediafire-getlink');

module.exports = {
  name: "mediafire",
  execute: async (sock, msg) => {
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const url = text.split(" ")[1];
    if (!url) {
      await sock.sendMessage(msg.key.remoteJid, { text: "📁 *Usage:* `.mediafire <file URL>`" });
      return;
    }
    try {
      const directLink = await getLink(url);
      await sock.sendMessage(msg.key.remoteJid, { text: `📥 Download link: ${directLink}` });
    } catch (error) {
      await sock.sendMessage(msg.key.remoteJid, { text: "❌ Failed to retrieve download link." });
    }
  }
};
```
