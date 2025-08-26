import express from "express";
import cors from "cors";

const app = express();
const PORT = 4002; // หรือ 4001 ก็ได้ถ้าไม่มีชน

app.use(cors());
app.use(express.json());

// Mock data (เหมือนโจทย์กำหนด)
const trips = [
  {
    eid: "1",
    title: "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!",
    url: "https://www.wongnai.com/trips/travel-koh-chang",
    description:
      "วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกิจกรรมต่าง ๆ เช่น เที่ยวน้ำตก ล่องเรือชมป่าชายเลน ขี่ช้างท่องป่า ผจญภัยเหนือยอดไม้ และดำน้ำตื้น รับรอทริปนี้สนุกแน่! “เกาะช้าง” จังหวัดตราด...",
    photos: [
      "https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/bd1d256256c14c208d0843a345f75741.jpg",
    ],
    tags: ["เกาะ", "ทะเล", "จุดชมวิว", "ธรรมชาติ", "ตราด"],
  },
  {
    eid: "6",
    title: "เที่ยวเกาะหลีเป๊ะ กิน เที่ยว พักที่ไหน? จัดมาให้ครบ!",
    url: "https://www.wongnai.com/trips/travel-koh-lipe",
    description:
      "ไปเที่ยวเกาะหลีเป๊ะ พักผ่อนบนหาดทรายขาว เล่นน้ำทะเลใส ๆ ดำน้ำตื้นชมความสวยงามโลกใต้ทะเล รับรองทริปนี้ไม่มีหลงเพราะจัดให้ครบ...",
    photos: [
      "https://img.wongnai.com/p/1600x0/2019/07/31/b3986319d85a4d85baecbacf03a519d8.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/31/9969a296fe1b452a8e64c2b7cfd58319.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/31/4edab94617f642d7ac11efd9bccb9863.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/31/58348f4c3ace47349e80e5930a7a525a.jpg",
    ],
    tags: ["ทะเล", "เกาะ", "สตูล", "ธรรมชาติ"],
  },
];

// ✅ API endpoint
app.get("/trips", (req, res) => {
  const { keywords } = req.query;

  if (!keywords || keywords.trim() === "") {
    return res.json({ data: trips });
  }

  const filtered = trips.filter(
    (trip) =>
      trip.title.includes(keywords) ||
      trip.description.includes(keywords) ||
      trip.tags.some((tag) => tag.includes(keywords))
  );

  res.json({ data: filtered });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
