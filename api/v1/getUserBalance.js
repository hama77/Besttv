export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const response = {
    balance: 100,
    currency: "USD",
    status: "success"
  };

  res.status(200).json(response);
}
