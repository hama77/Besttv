export default function handler(req, res) {
  res.status(200).json({
    status: true,
    message: "Player API working"
  });
}
