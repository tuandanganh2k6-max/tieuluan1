import React from "react";
/* Import CSS từ src/layouts/css */
import "./css/MenuTop.css";

const MenuTop: React.FC = () => {
  return (
    <header className="menu-top">
      <div className="logo">📚 Tiệm Sách Trinh</div>
      <nav className="menu-links">
        <a href="#">Trang chủ</a>
        <a href="#">Danh sách sách</a>
        <a href="#">Thêm sách</a>
      </nav>
    </header>
  );
};

export default MenuTop;
