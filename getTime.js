export default function handler(req, res) {
  const data = {
    time: Math.floor(Date.now() / 1000)
  };

  res.send(encrypt(data));
}
