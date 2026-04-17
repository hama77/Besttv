import { encrypt } from "../crypto";

export default function handler(req, res) {
  const data = {
    code: 0,
    msg: "success",
    data: [
      {
        id: 1,
        name: "1 Month",
        price: 5
      },
      {
        id: 2,
        name: "1 Year",
        price: 50
      }
    ]
  };

  res.send(encrypt(data));
}
