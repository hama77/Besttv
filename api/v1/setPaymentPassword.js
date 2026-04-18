export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { password } = req.body;

  const response = {
    status: "password_set",
    received: password || null
  };

  res.status(200).json(response);
}
