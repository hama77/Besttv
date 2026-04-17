import crypto from "crypto";

const KEY = Buffer.from("KMdaF2HeNUT0ye6N3LvF0Mso");
const IV = Buffer.from("45760761".padEnd(16, "0"));

function encrypt(text) {
  const cipher = crypto.createCipheriv("aes-192-cbc", KEY, IV);
  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}

export default function handler(req, res) {
  try {
    const jsonData = JSON.stringify({
      code: 200,
      msg: "success",
      data: [
        { id: 1, name: "1 Month", price: 5 },
        { id: 2, name: "3 Months", price: 12 },
        { id: 3, name: "1 Year", price: 40 }
      ]
    });

    res.status(200).send(encrypt(jsonData));
  } catch {
    res.status(500).send("Error");
  }
}
