const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Danh sách các URL hình ảnh ngẫu nhiên
const imageUrls = [
  "https://i.imgur.com/ViyrL01.jpg",
   "https://i.imgur.com/l3gE4J5.jpg",
  // Thêm các URL hình ảnh khác vào đây
];

app.get('/random-image', (req, res) => {
  // Chọn ngẫu nhiên một URL hình ảnh
  let imageUrl = getRandomImageUrl();

  // Kiểm tra xem URL có định dạng .jpg không
  while (!imageUrl.toLowerCase().endsWith('.jpg')) {
    imageUrl = getRandomImageUrl();
  }

  // Trả về URL hình ảnh
  res.json({ image_url: imageUrl });
});

function getRandomImageUrl() {
  // Chọn ngẫu nhiên một URL hình ảnh
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
