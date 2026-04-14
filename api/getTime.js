import crypto from "crypto";

const KEY = Buffer.from("KMdaF2HeNUT0ye6N3LvF0Mso", "utf8"); 
const IV = Buffer.from("45760761", "utf8"); // لا تعمل pad هنا

function encrypt(text) {
  const cipher = crypto.createCipheriv(
    "aes-128-cbc", // مهم جدًا
    KEY.slice(0, 16), // 16 bytes فقط
    IV
  );

  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");

  return encrypted;
}

export default function handler(req, res) {
  const data = JSON.stringify({
    time: Date.now()
  });

  const encrypted = encrypt(data);

  res.status(200).send(encrypted);
}
