export default function handler(req, res) {
  return res.json({
    profiles: [
      { id: 1, name: "1", avatar: "https://i.pravatar.cc/150?img=1" },
      { id: 2, name: "2", avatar: "https://i.pravatar.cc/150?img=2" },
      { id: 3, name: "3", avatar: "https://i.pravatar.cc/150?img=3" },
      { id: 4, name: "4", avatar: "https://i.pravatar.cc/150?img=4" },
      { id: 5, name: "5", avatar: "https://i.pravatar.cc/150?img=5" }
    ]
  });
}
