import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookListPage from "./pages/BookListPage";
import MenuTop from "./layouts/MenuTop";
import MenuFront from "./layouts/MenuFront";
import Footer from "./layouts/Footer";

const App: React.FC = () => {
  return (
    <>
      {/* ✅ Hiển thị MenuTop (logo + các danh mục chính) */}
      <MenuTop />

      {/* ✅ Hiển thị MenuFront (menu phụ, banner, hoặc thanh chọn danh mục nhanh) */}
      <MenuFront />

      {/* ✅ Phần định tuyến nội dung chính */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cong-nghe" element={<BookListPage category="cong-nghe" />} />
        <Route path="/van-hoc" element={<BookListPage category="van-hoc" />} />
        <Route path="/kinh-te" element={<BookListPage category="kinh-te" />} />
        <Route path="/thieu-nhi" element={<BookListPage category="thieu-nhi" />} />
      </Routes>

      {/* ✅ Chân trang */}
      <Footer />
    </>
  );
};

export default App;
