import { encrypt } from "../crypto";

export default function handler(req, res) {
  const data = {
    code: 0,
    msg: "success",
    data: {
      balance: 1000
    }
  };

  res.send(encrypt(data));
}
