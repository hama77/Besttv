export default function handler(req, res) {
  const data = {
    status: "success"
  };

  res.send(encrypt(data));
}
