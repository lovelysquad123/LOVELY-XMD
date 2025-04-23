“`javascript
module.exports = 
  name: "instagram",
  execute: async (sock, msg) => 
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const args = text.split(" ").slice(1).join(" ");
    if (!args) 
      await sock.sendMessage(msg.key.remoteJid,  text: "📸 *Usage:* `.instagram <post URL>`" );
      return;
    
    // Example response
    await sock.sendMessage(msg.key.remoteJid,  text: `📥 Downloading Instagram post from:{args}` });
  }
};
