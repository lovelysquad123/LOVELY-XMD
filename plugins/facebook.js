“`javascript
module.exports = 
  name: "facebook",
  execute: async (sock, msg) => 
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const args = text.split(" ").slice(1).join(" ");
    if (!args) 
      await sock.sendMessage(msg.key.remoteJid,  text: "📘 *Usage:* `.facebook <video URL>`" );
      return;
    
    // Example response
    await sock.sendMessage(msg.key.remoteJid,  text: `📥 Downloading Facebook video from:{args}` });
  }
};
```

---
