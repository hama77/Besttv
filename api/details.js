export default function handler(req, res) {
  res.status(200).json({
    status: true,
    details: {
      name: "Test Channel",
      description: "Working"
    }
  });
}
