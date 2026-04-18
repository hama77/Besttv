export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { orderId } = req.body;

  const response = {
    status: "paid",
    orderId: orderId || ("ORDER_" + Date.now())
  };

  res.status(200).json(response);
}
