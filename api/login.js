export default function handler(req, res) {
  let body = {};

  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch (e) {
    body = {};
  }

  const email = body?.email || "guest@besttv.app";

  return res.status(200).json({
    status: true,
    token: "besttv_token_123",
    user: {
      id: 1,
      name: "BestTV",
      email: email
    }
  });
}
