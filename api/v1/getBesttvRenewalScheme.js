export default function handler(req, res) {
  const data = {
    list: []
  };

  res.send(encrypt(data));
}
