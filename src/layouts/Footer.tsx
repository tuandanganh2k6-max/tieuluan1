import React from "react";
import "../assets/css/Footer.css";
import Logo from "../assets/images/mau-logo-nha-sach.jpg"; // ảnh logo mới

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo ảnh gọn, bo góc */}
        <img src={Logo} alt="Logo Tiệm Sách Tuấn" className="footer-logo-img" />
        <div className="footer-links">
          <a href="#">Trang chủ</a>
          <a href="#">Sản phẩm</a>
          <a href="#">Liên hệ</a>
          <a href="#">Giới thiệu</a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Tiệm Sách Tuấn - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
