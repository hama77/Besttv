import { encrypt } from "../crypto";

export default function handler(req, res) {
  const data = {
    code: 0,
    msg: "success",
    data: {
      time: Date.now()
    }
  };

  res.send(encrypt(data));
}
