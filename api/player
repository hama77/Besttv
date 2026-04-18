export default function handler(req, res) {
  const id = req.query.id;

  const streams = {
    1: {
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      type: "hls"
    },
    2: {
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      type: "hls"
    }
  };

  return res.status(200).json({
    status: true,
    data: streams[id] || null
  });
}
