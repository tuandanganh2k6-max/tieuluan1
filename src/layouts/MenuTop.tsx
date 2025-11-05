import React from "react";
import "../assets/css/MenuTop.css"; // đúng với cấu trúc mới

const MenuTop: React.FC = () => {
  return (
    <header className="menu-top">
      <div className="logo">📚 Tiệm Sách Tuấn</div>
      <nav className="menu-links">
        <a href="#">Trang chủ</a>
        <a href="#">Danh sách sách</a>
        <a href="#">Thêm sách</a>
        <a href="#">Đặt hàng</a>
      </nav>
    </header>
  );
};

export default MenuTop;
