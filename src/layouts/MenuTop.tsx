import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/MenuTop.css";
import Logo from "../assets/images/mau-logo-nha-sach.jpg"; // ảnh logo của bạn

const MenuTop: React.FC = () => {
  return (
    <header className="menu-top">
      {/* Logo bấm về trang chủ */}
      <Link to="/">
        <img src={Logo} alt="Logo Tiệm Sách" className="menu-top-logo" />
      </Link>

      {/* Menu chính */}
      <nav className="menu-top-nav">
        <Link to="/cong-nghe">Công nghệ</Link>
        <Link to="/van-hoc">Văn học</Link>
        <Link to="/kinh-te">Kinh tế</Link>
        <Link to="/thieu-nhi">Thiếu nhi</Link>
      </nav>
    </header>
  );
};

export default MenuTop;
