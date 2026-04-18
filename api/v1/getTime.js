export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const response = {
    time: Date.now()
  };

  res.status(200).json(response);
}
