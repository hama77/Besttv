export default function handler(req, res) {
  res.status(200).json({
    status: "success",
    recommendations: [
      {
        title: "Movie 1",
        image: "https://via.placeholder.com/150"
      },
      {
        title: "Movie 2",
        image: "https://via.placeholder.com/150"
      }
    ]
  });
}
