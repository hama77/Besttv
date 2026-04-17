import { encrypt } from "./crypto";

export default function handler(req, res) {
  const data = {
    code: 0,
    msg: "order success",
    data: {
      orderId: "123456"
    }
  };

  res.send(encrypt(data));
}
