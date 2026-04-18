import movies from '../data/movies.json';

export default function handler(req, res) {
  res.json({
    top: movies.slice(0, 5),
    trending: movies.slice(5, 15),
    recommended: movies.slice(15, 25)
  });
}
