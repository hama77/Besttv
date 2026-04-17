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
  const jsonData = JSON.stringify({
    code: 200,
    msg: "success",
    data: [
      { id: 1, name: "1 Month", price: 10 },
      { id: 2, name: "6 Months", price: 50 },
      { id: 3, name: "12 Months", price: 80 }
    ]
  });

  res.status(200).send(encrypt(jsonData));
}
