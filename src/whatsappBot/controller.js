import { client } from './index.js'

const bulkMsg = async (req, res) => {
  const { number, message, bomb } = req.body;

  if ([number, message, bomb].some((fields) => fields?.trim() == "")) {
    return res.status(400).json({ message: "all fields are required" });
  }

  if (client.info === undefined) {
    return res.status(400).json({ message: "system is not ready" });
  }

  for (let i = 0; i < bomb; i++) {
    await client.sendMessage(number + "@c.us", message);
  }

  res.status(200).send("message send");
};

export { bulkMsg };
