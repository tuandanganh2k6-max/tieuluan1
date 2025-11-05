import React from "react";
import "../assets/css/MenuFront.css";
import Logo from "../assets/images/mau-logo-nha-sach.jpg"; // import logo mới

const MenuFront: React.FC = () => {
  return (
    <div className="menu-front">
      <img src={Logo} alt="Logo Tiệm Sách" className="logo-img" />
      <button>Thể loại: Công nghệ</button>
      <button>Thể loại: Văn học</button>
      <button>Thể loại: Kinh tế</button>
      <button>Thể loại: Thiếu nhi</button>
    </div>
  );
};

export default MenuFront;
