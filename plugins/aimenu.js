```js
module.exports = {
    name: "aimenu",
    execute: async (sock, msg) => {
        const menu = `
🤖 *LOVELY-XMD AI MENU*

╭─────────────◆
│ 🔹 .gpt
│ 🔹 .gpt2
│ 🔹 .dalle
│ 🔹 .mistral
│ 🔹 .deepseek
│ 🔹 .metaai
│ 🔹 .llama
│ 🔹 .letterai
│ 🔹 .photoai
│ 🔹 .doppleai
╰─────────────◆

_Use any above command + type your qes__
Example:  *.gpt What is the moon made of?*

*🧠 Powered by DILSHAN AI SYSTEM*
        `;
        await sock.sendMessage(msg.key.remoteJid, { text: menu });
    }
};
```
