export type Book = {
    id: number;
    title: string;
    author: string;
    price: number;
    category: "cong-nghe" | "van-hoc" | "kinh-te" | "thieu-nhi";
    image: string;
    description?: string;
  };
  
  export const books: Book[] = [
    {
      id: 1,
      title: "Thiết Kế Game Nâng Cao",
      author: "Nguyễn Văn A",
      price: 250000,
      category: "cong-nghe",
      image: "/images/reactnangcao.jpg",
      description: "Hướng dẫn nâng cao React: hooks, context, performance..."
    },
    {
      id: 2,
      title: "Node.js & Backend",
      author: "Trần B",
      price: 200000,
      category: "cong-nghe",
      image: "/images/node.jpg",
      description: "Xây dựng API với Node.js, Express, kết nối DB..."
    },
    {
      id: 3,
      title: "Sông Đà",
      author: "Nguyễn Tuân",
      price: 120000,
      category: "van-hoc",
      image: "/images/songda.jpg",
      description: "Tuyển tập văn học nổi tiếng của Nguyễn Tuân..."
    },
    {
      id: 4,
      title: "Dế Mèn Phiêu Lưu Ký",
      author: "Tô Hoài",
      price: 90000,
      category: "thieu-nhi",
      image: "/images/demenphuluuki.jpg",
      description: "Truyện thiếu nhi kinh điển về hành trình phiêu lưu của Dế Mèn..."
    },
    {
      id: 5,
      title: "Quản trị kinh doanh",
      author: "Nguyễn C",
      price: 300000,
      category: "kinh-te",
      image: "/images/QTKD.jpg",
      description: "Những chiến lược quản trị hiệu quả trong thời đại mới..."
    }
  ];
  