import { encrypt } from "../../crypto";

export default function handler(req, res) {
  const data = {
    code: 0,
    serverTime: Date.now()
  };

  res.send(encrypt(data));
}
