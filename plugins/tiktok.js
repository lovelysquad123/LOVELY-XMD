```javascript
const TikTokScraper = require('tiktok-scraper');

module.exports = {
  name: "tiktok",
  execute: async (sock, msg) => {
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const url = text.split(" ")[1];
    if (!url) {
      await sock.sendMessage(msg.key.remoteJid, { text: "🎵 *Usage:* `.tiktok <video URL>`" });
      return;
    }
    try {
      const videoMeta = await TikTokScraper.getVideoMeta(url);
      const videoUrl = videoMeta.collector[0]?.videoUrl;
      if (videoUrl) {
        await sock.sendMessage(msg.key.remoteJid, { text: `📥 Downloaded video: ${videoUrl}` });
      } else {
        await sock.sendMessage(msg.key.remoteJid, { text: "❌ Failed to retrieve video." });
      }
    } catch (error) {
      await sock.sendMessage(msg.key.remoteJid, { text: "❌ Error occurred while downloading video." });
    }
  }
};
```
