export default function handler(req, res) {
  return res.status(200).json({
    status: true,
    sections: [
      {
        title: "Top Picks",
        items: [
          {
            id: 1,
            title: "One Piece",
            poster: "https://image.tmdb.org/t/p/w500/onepiece.jpg",
            rating: 8.7,
            year: 2026,
            type: "series"
          }
        ]
      },
      {
        title: "Trending",
        items: [
          {
            id: 2,
            title: "Game of Thrones",
            poster: "https://image.tmdb.org/t/p/w500/got.jpg",
            rating: 8.4,
            year: 2011,
            type: "series"
          }
        ]
      }
    ]
  });
}
