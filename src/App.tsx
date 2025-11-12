// src/App.tsx

import React from "react";
import { Routes, Route } from "react-router-dom";

// Components & Pages
import Home from "./pages/Home";
import BookListPage from "./pages/BookListPage";
import BookDetailPage from "./pages/BookDetailPage"; // ⬅️ NEW: Trang chi tiết sản phẩm
import LoginPage from "./pages/LoginPage"; // ⬅️ NEW: Trang đăng nhập
import CartPage from "./pages/CartPage"; // ⬅️ NEW: Trang giỏ hàng

// Layouts
import MenuTop from "./layouts/MenuTop";
import MenuFront from "./layouts/MenuFront";
import Footer from "./layouts/Footer";

// Context
import { CartProvider } from "./context/CartContext"; // ⬅️ NEW: Context Giỏ hàng

// Styles
import "./assets/css/Bocuc.css";

const App: React.FC = () => {
  return (
    // ✅ Bao bọc toàn bộ ứng dụng trong CartProvider
    <CartProvider> 
      <div className="layout">
        <MenuTop />
        <MenuFront />

        <main className="main-content">
          <Routes>
            {/* ROUTES CŨ (Danh mục) */}
            <Route path="/" element={<Home />} />
            <Route path="/cong-nghe" element={<BookListPage category="cong-nghe" />} />
            <Route path="/van-hoc" element={<BookListPage category="van-hoc" />} />
            <Route path="/kinh-te" element={<BookListPage category="kinh-te" />} />
            <Route path="/thieu-nhi" element={<BookListPage category="thieu-nhi" />} />
            
            {/* 🚀 ROUTES MỚI BỔ SUNG */}
            
            {/* 1. Chi tiết sản phẩm: Sử dụng tham số động :slug */}
            <Route path="/sach/:slug" element={<BookDetailPage />} /> 

            {/* 2. Đăng nhập/Đăng ký */}
            <Route path="/dang-nhap" element={<LoginPage />} />
            <Route path="/dang-ky" element={<div>Đang phát triển...</div>} /> 

            {/* 3. Giỏ hàng */}
            <Route path="/gio-hang" element={<CartPage />} />
            
            {/* 4. Trang 404 (Không bắt buộc, nhưng nên có) */}
            <Route path="*" element={<div>404 - Trang không tồn tại</div>} />
            
          </Routes>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;