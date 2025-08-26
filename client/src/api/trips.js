export const tripsData = [
    {
      id: 1,
      title: 'คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านบอกครบที่เดียว!',
      description: 'วางแผนไปเที่ยวเกาะช้างกัน พร้อมท์ทำกิจกรรมสนุก ๆ เช่น เที่ยวป่า ดำน้ำดูปลา นั่งชิลในสถานที่ท่องเที่ยวใหม่',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center',
      tags: ['เกาะ', 'กิน', 'ดำน้ำลึก', 'ธรรมชาติ', 'และ', 'ตลาด'],
      gallery: [
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=60&h=60&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=60&h=60&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=60&h=60&fit=crop&crop=center'
      ],
      category: 'เกาะ',
      location: 'ตราด'
    },
    {
      id: 2,
      title: 'ลิสเลาะ 10 ที่เที่ยวย่าน BTS สายสีเขียว',
      description: 'BTS สายสีเขียวนอกจากมีกิจกรรม 5 ส่วนกิจกรม งานนี้มาดูว่าไปพักสนใจมาดู จุดเปิดโตเล่ย์ เชื่อนี้เที่ยเลยทำใหม่ ๆ ดูให้มาว',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=300&h=200&fit=crop&crop=center',
      tags: ['คาเฟ่', 'ร้านอาหาร', 'จุดถ่ายรูป', 'เที่ยวในกรุง', 'และ', 'ครอบครัวมากมาว'],
      gallery: [
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=60&h=60&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1551632811-561732d1e306?w=60&h=60&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=60&h=60&fit=crop&crop=center'
      ],
      category: 'เมือง',
      location: 'กรุงเทพมหานคร'
    },
    {
      id: 3,
      title: 'เที่ยวกุ้งทานตะวันออกไกล ได้รูปสวยไปต้องไปไกลเลย ได้รัฐบุรพา',
      description: 'บานเพลงร้องส่วนวา กับกุ้งทานตะวันอิคคำกลาว 30 ไร่ แล้วยักทะเล่าน่ใน เพราะข้าวไปเก็ยเขมวถับกันแ้แมแม่เล็ก',
      image: 'https://images.unsplash.com/photo-1597149738901-e7dc95ef5296?w=300&h=200&fit=crop&crop=center',
      tags: ['จุดถ่ายรูป', 'ธรรมชาติสวย', 'เที่ยวในกรุง', 'และ', 'ยามสี่'],
      gallery: [
        'https://images.unsplash.com/photo-1597149738901-e7dc95ef5296?w=60&h=60&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=60&h=60&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=60&h=60&fit=crop&crop=center'
      ],
      category: 'ธรรมชาติ',
      location: 'จันทบุรี'
    }
  ];
  
  export const getTrips = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(tripsData);
      }, 500);
    });
  };
  
  export const searchTrips = (query) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredTrips = tripsData.filter(trip => 
          trip.title.toLowerCase().includes(query.toLowerCase()) ||
          trip.description.toLowerCase().includes(query.toLowerCase()) ||
          trip.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
        resolve(filteredTrips);
      }, 300);
    });
  };
  