```javascript
const TikTokScraper = require('tiktok-scraper');

module.exports = {
  name: "tiktokaudio",
  execute: async (sock, msg) => {const url = text.split(" ")[1];
    if (!url) 
      await sock.sendMessage(msg.key.remoteJid,  text: "📌 *Usage:* `.pinterest <image URL>`" );
      return;
    
    try 
      const client = new Apify.Client( token: 'YOUR_APIFY_TOKEN' );
      const run = await client.actor('apify/pinterest-downloader').call( url );
      const  defaultDatasetId  = run;
      const dataset = await client.dataset(defaultDatasetId);
      const items = await dataset.listItems();
      const imageUrl = items.items[0]?.imageUrl;
      if (imageUrl) 
        await sock.sendMessage(msg.key.remoteJid,  text: `📥 Downloaded image:{imageUrl}` });
      } else {
        await sock.sendMessage(msg.key.remoteJid, { text: "❌ Failed to retrieve image." });
      }
    } catch (error) {
      await sock.sendMessage(msg.key.remoteJid, { text: "❌ Error occurred while downloading image." });
    }
  }
};
```
