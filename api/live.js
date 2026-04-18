export default function handler(req, res) {
  res.status(200).json({
    status: true,
    channels: [
      {
        id: 1,
        name: "Rural TV",
        logo: "",
        stream: "http://201.217.246.42:44310/Live/3fcb6e26785fd8d415571b26dc3cf5d3/rural.playlist.m3u8"
      },
      {
        id: 2,
        name: "Quiero Musica",
        logo: "",
        stream: "http://201.217.246.42:44310/Live/3fcb6e26785fd8d415571b26dc3cf5d3/local-51.playlist.m3u8"
      }
    ]
  });
}
