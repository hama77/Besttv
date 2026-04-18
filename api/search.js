export default function handler(req, res) {
  const q = (req.query.q || "").toLowerCase();

  const data = [
    {
      id: 1,
      title: "One Piece",
      poster: "https://image.tmdb.org/t/p/w500/onepiece.jpg"
    },
    {
      id: 2,
      title: "Naruto",
      poster: "https://image.tmdb.org/t/p/w500/naruto.jpg"
    },
    {
      id: 3,
      title: "Breaking Bad",
      poster: "https://image.tmdb.org/t/p/w500/breakingbad.jpg"
    }
  ];

  const results = data.filter(item =>
    item.title.toLowerCase().includes(q)
  );

  return res.status(200).json({
    status: true,
    results: results
  });
}
