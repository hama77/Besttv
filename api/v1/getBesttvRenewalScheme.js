export default function handler(req, res) {
  const data = {
    list: [
      {
        id: 1,
        name: "VIP",
        price: 10
      }
    ]
  };

  res.send(encrypt(data));
}
