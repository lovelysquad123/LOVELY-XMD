```javascript
module.exports = {
  name: "groupmenu",
  execute: async (sock, msg) => {
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    if (!text) return;

    const jid = msg.key.remoteJid;
    const senderName = msg.pushName;

    if (text === '.groupmenu') {
      const menu = `
🫟 *Welcome to LOVELY-XMD GROUP MENU* 🫟

*╭─「 Status Details 」*
*│* 👾 *\`Bot\`* = LOVELY-XMD
*│* 👤 *\`User\`* = senderName
*│* ☎️ *Owner Number* ={jid}
*│* ⏰ *\`Uptime\`* = process.uptime().toFixed(0) seconds
*│* 📂 *R̀AM*̀ ={(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
*│* ✒️ *\`Prefix\`* = .
*╰──────────●●►*

👥 *Group Management Options:*

🔹 .add [number]
🔹 .kick [number]
🔹 .promote [number]
🔹 .demote [number]
🔹 .tagall
🔹 .setdesc [description]
🔹 .setgroupname [name]
🔹 .setppgroup [image]
🔹 .delppgroup
🔹 .link
🔹 .resetlink

*☠︎︎ Powered by DILSHAN 〽️Ｄ*
      `;
await sock.sendMessage(jid, { text: menu });
    }

    // .add command
    if (text.startsWith('.add ')) {
      const number = text.split(' ')[1];
      if (!number) return sock.sendMessage(jid, { text: "❌ Please provide a number." });
      await sock.groupParticipantsUpdate(jid, [`number@s.whatsapp.net`], "add");
    

    // .kick command
    if (text.startsWith('.kick ')) 
      const number = text.split(' ')[1];
      if (!number) return sock.sendMessage(jid,  text: "❌ Please provide a number." );
      await sock.groupParticipantsUpdate(jid, [`{number}@s.whatsapp.net`], "remove");
    }

    // .promote command
    if (text.startsWith('.promote ')) {
      const number = text.split(' ')[1];
      if (!number) return sock.sendMessage(jid, { text: "❌ Please provide a number." });
      await sock.groupParticipantsUpdate(jid, [`number@s.whatsapp.net`], "promote");
    

    // .demote command
    if (text.startsWith('.demote ')) 
      const number = text.split(' ')[1];
      if (!number) return sock.sendMessage(jid,  text: "❌ Please provide a number." );
      await sock.groupParticipantsUpdate(jid, [`{number}@s.whatsapp.net`], "demote");
    }

    // .tagall command
    if (text === '.tagall') {
      const metadata = await sock.groupMetadata(jid);
      const participants = metadata.participants.map(p => `@${p.id.split('@')[0]}`).join(' ');
      await sock.sendMessage(jid, { text: participants, mentions: metadata.participants.map(p => p.id) });
    }

    // .setdesc command
    if (text.startsWith('.setdesc ')) {
      const description = text.slice(9).trim();
      if (!description) return sock.sendMessage(jid, { text: "❌ Please provide a description." });
      await sock.groupUpdateDescription(jid, description);
    }

    // .setgroupname command
    if (text.startsWith('.setgroupname ')) {
      const name = text.slice(14).trim();
      if (!name) return sock.sendMessage(jid, { text: "❌ Please provide a group name." });
      await sock.groupUpdateSubject(jid, name);
    }

    // .setppgroup command
    if (text === '.setppgroup') {
      if (!msg.message.imageMessage) return sock.sendMessage(jid, { text: "❌ Please send an image with the command." });
      const buffer = await downloadMediaMessage(msg.message.imageMessage);
      await sock.updateProfilePicture(jid, buffer);
    }

    // .delppgroup command
    if (text === '.delppgroup') {
      await sock.updateProfilePicture(jid, null);
    }

    // .link command
    if (text === '.link') {
      const code = await sock.groupInviteCode(jid);
