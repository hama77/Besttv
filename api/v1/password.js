export default function handler(req, res) {
  return res.status(200).json({
    status: "success",
    message: "access granted",
    password: "1234"
  });
}
