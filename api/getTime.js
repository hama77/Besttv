import crypto from "crypto";

const KEY = Buffer.from("KMdaF2HeNUT0ye6N3LvF0Mso");
const IV = Buffer.from("45760761".padEnd(16, "0"));

function encrypt(text) {
  const cipher = crypto.createCipheriv("aes-192-cbc", KEY, IV);
  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}

function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv("aes-192-cbc", KEY, IV);
  let decrypted = decipher.update(encryptedText, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

export default function handler(req, res) {
  const jsonData = JSON.stringify({
    time: Date.now()
  });

  const encrypted = encrypt(jsonData);

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(encrypted);
}
