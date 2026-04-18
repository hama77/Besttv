export default function handler(req, res) {
  const id = req.query.id;

  const data = {
    1: {
      id: 1,
      title: "One Piece",
      description: "Pirate adventure story",
      poster: "https://image.tmdb.org/t/p/w500/onepiece.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/onepiece.jpg",
      rating: 9.0,
      year: 1999,
      type: "series"
    },
    2: {
      id: 2,
      title: "Naruto",
      description: "Ninja story",
      poster: "https://image.tmdb.org/t/p/w500/naruto.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/naruto.jpg",
      rating: 8.5,
      year: 2002,
      type: "series"
    }
  };

  return res.status(200).json({
    status: true,
    data: data[id] || null
  });
}
