export default function handler(req, res) {
  res.status(200).json([
    { name: "Bein Sports", url: "https://example.com/stream1" },
    { name: "Al Jazeera", url: "https://example.com/stream2" }
  ]);
}
