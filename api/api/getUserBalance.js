export default function handler(req, res) {
  res.status(200).json({
    status: "success",
    balance: 9999,
    user: "besttv_user"
  });
}
