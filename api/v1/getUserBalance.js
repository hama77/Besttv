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
    data: {
      balance: 9999,
      vip: true,
      expire: 1893456000000
    }
  });

  res.status(200).send(encrypt(jsonData));
}
