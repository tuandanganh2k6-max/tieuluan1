import React from "react";
import MenuTop from "./layouts/MenuTop";
import MenuFront from "./layouts/MenuFront";
import Footer from "./layouts/Footer";

export default function App() {
  return (
    <div>
      {/* Menu trên cùng */}
      <MenuTop />

      {/* Menu phụ */}
      <MenuFront />

      {/* Nội dung chính */}
      <div style={{ padding: "20px", minHeight: "60vh" }}>
        <h1>Quản lý sách</h1>
        <p>Chào mừng bạn đến Tiệm Sách Trinh!</p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
