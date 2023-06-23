const express = require("express");
// const fs = require("fs");
const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// const client = new Client();

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    handleSIGINT: false,
    args: ["--na-sandbox", "--disable-setuid-sandbox"],
  },
});

// const number = ""

app.post("/bot", async (req, res) => {
  if (client.info === undefined) {
    res.send('{"responce":"system is not readt"}');
    return;
  }
  for(let i=0;i<req.body.bomb;i++){
  // await client.sendMessage(number + "@c.us", req.body.name);
  // await client.sendMessage(number + "@c.us", req.body.email);
  await client.sendMessage(req.body.number + "@c.us", req.body.message);
  }
  res.end();
});

app.listen(5000);

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("message",async (message) => {
  if (message.body === "gmdc") {
    message.reply("Add News........");
    message.reply("Enter Yiur title");
  }
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.initialize();