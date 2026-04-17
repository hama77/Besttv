export default function handler(req, res) {
  return res.status(200).json({
    status: "success",
    password: "1234",
    access: true
  });
}
