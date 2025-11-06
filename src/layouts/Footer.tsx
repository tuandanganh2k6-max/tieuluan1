import React from "react";
import "../assets/css/MenuTop.css"; // css của bạn trong src/assets/css

const MenuTop: React.FC = () => {
  return (
    <header className="menu-top">
      <a href="/">
        <img src="/images/mau-logo-nha-sach.jpg" alt="Logo Tiệm Sách" className="menu-top-logo" />
      </a>
      <nav className="menu-top-nav">
        <a href="/cong-nghe">Công nghệ</a>
        <a href="/van-hoc">Văn học</a>
        <a href="/kinh-te">Kinh tế</a>
        <a href="/thieu-nhi">Thiếu nhi</a>
      </nav>
    </header>
  );
};

export default MenuTop;
