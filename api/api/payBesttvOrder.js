export default function handler(req, res) {
  const { password, scheme } = req.query;

  if (password !== "1234" || scheme !== "besttv") {
    return res.status(403).json({
      status: "error",
      message: "Unauthorized"
    });
  }

  res.status(200).json({
    status: "success",
    message: "Payment completed"
  });
}
