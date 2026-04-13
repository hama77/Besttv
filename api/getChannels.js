export default function handler(req, res) {
  res.status(200).json({
    status: "success",
    channels: [
      {
        name: "NASA TV",
        url: "https://ntv1.akamaized.net/hls/live/2034660/NASA-NTV1/master.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
      },
      {
        name: "Al Jazeera",
        url: "https://live-hls-web-aja.getaj.net/AJA/index.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Aljazeera_eng.svg"
      },
      {
        name: "France 24",
        url: "https://static.france24.com/live/F24_EN_LO_HLS/live_web.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/France24.png"
      }
    ]
  });
}
