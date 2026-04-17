export default function handler(req, res) {
  const data = {
    balance: 1000
  };

  res.send(encrypt(data));
}
