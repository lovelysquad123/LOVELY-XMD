```javascript
module.exports = {
  name: "gdrive",
  execute: async (sock, msg) => {
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const args = text.split(" ").slice(1).join(" ");
    if (!args) {
      await sock.sendMessage(msg.key.remoteJid, { text: "📁 *Usage:* `.gdrive <file ID>`" });
      return;
    }
    // Example response
    await sock.sendMessage(msg.key.remoteJid, { text: `📥 Downloading file from Google Drive with ID: args` );
  ;
“`
