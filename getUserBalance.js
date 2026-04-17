export default function handler(req, res) {
  const data = {
    balance: 999
  };

  res.send(encrypt(data));
}
