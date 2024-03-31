import { app } from './app.js'
import qrcode from 'qrcode-terminal'
import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;

const PORT = process.env.PORT || 3000;
export const client = new Client();

// use this to store the session of your whatspp account 
/*export const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    handleSIGINT: false,
    args: ["--na-sandbox", "--disable-setuid-sandbox"],
  },
}); */

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("message", async (message) => {
  if (message.body === "Hi") {
    message.reply("Hi");
  }
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.initialize();

app.listen(PORT, () => {
  console.log("server running in port", PORT);
});
