```javascript
const { XVDL } = require('xvdl');

module.exports = {name: "xvideos",
  execute: async (sock, msg) => {
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const url = text.split(" ")[1];
    if (!url)
