import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookListPage from "./pages/BookListPage";
import MenuTop from "./layouts/MenuTop";
import MenuFront from "./layouts/MenuFront";
import Footer from "./layouts/Footer";
import "./assets/css/Bocuc.css"; // ✅ nhớ đúng đường dẫn + đúng chữ hoa

const App: React.FC = () => {
  return (
    <div className="layout">
      <MenuTop />
      <MenuFront />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cong-nghe" element={<BookListPage category="cong-nghe" />} />
          <Route path="/van-hoc" element={<BookListPage category="van-hoc" />} />
          <Route path="/kinh-te" element={<BookListPage category="kinh-te" />} />
          <Route path="/thieu-nhi" element={<BookListPage category="thieu-nhi" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
