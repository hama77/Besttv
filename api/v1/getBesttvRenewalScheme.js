export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const response = {
    plans: [
      { id: 1, name: "1 Month", price: 10 },
      { id: 2, name: "3 Months", price: 25 },
      { id: 3, name: "12 Months", price: 80 }
    ]
  };

  res.status(200).json(response);
}
