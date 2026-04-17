import crypto from "crypto";

function fixKey(key) {
  let buf = Buffer.from(key, "utf8");

  if (buf.length === 24) return buf;
  if (buf.length > 24) return buf.slice(0, 24);

  if (buf.length === 16) {
    return Buffer.concat([buf, buf.slice(0, 8)]);
  }

  let out = Buffer.alloc(24);
  buf.copy(out);
  return out;
}

function fixIv(iv) {
  let buf = Buffer.from(iv, "utf8");
  let out = Buffer.alloc(8);
  buf.copy(out, 0, 0, Math.min(buf.length, 8));
  return out;
}

export function encrypt(data) {
  const key = fixKey("KMdaF2HeNUT0ye6N3LvF0Mso");
  const iv = fixIv("45760761");

  const cipher = crypto.createCipheriv(
    "des-ede3-cbc",
    key,
    iv
  );

  let encrypted = cipher.update(JSON.stringify(data), "utf8", "base64");
  encrypted += cipher.final("base64");

  return encrypted;
}
