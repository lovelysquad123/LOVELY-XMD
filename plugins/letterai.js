``javascript
const axios = require('axios');

module.exports = {
  name: "letterai",
  execute: async (sock, msg) => {
    try {
      const prompt = msg.message.conversation || msg.message.extendedTextMessage?.text;
      const query = prompt.replace('.letterai', '').trim();

      if (!query) {
        return await sock.sendMessage(msg.key.remoteJid, {
          text: "✉️ தயவுசெய்து ஒரு கடிதத்தின் உள்ளடக்கத்தை வழங்கவும். உதாரணம்: `.letterai Write a thank you letter`"
        });
      }

      const response = await axios.post("https://api.letterai.com/generate", {
        prompt: query
      }, {
