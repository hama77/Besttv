export default function handler(req, res) {
  try {
    const jsonData = JSON.stringify({
      time: Date.now()
    });

    const encrypted = encrypt(jsonData);

    console.log("Encrypted:", encrypted);
    console.log("Decrypted:", decrypt(encrypted));

    try {
      console.log(
        "Test Decrypt:",
        decrypt("8bTxvZtWpRzmTUooZl3rEcIOkrI8cyeNoB5Rs7e+8c=")
      );
    } catch (e) {
      console.log("Decrypt test failed:", e.message);
    }

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(encrypted);

  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).send("Server error");
  }
}
