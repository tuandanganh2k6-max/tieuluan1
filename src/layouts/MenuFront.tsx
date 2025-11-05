import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/MenuFront.css";

const MenuFront = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-front">
      {/* Logo bằng chữ */}
      <h1 className="logo-text" onClick={() => navigate("/")}>
        📚Sách Tuấn📚
      </h1>

      {/* Nút chuyển trang theo thể loại */}
      <button onClick={() => navigate("/cong-nghe")}>Công nghệ</button>
      <button onClick={() => navigate("/van-hoc")}>Văn học</button>
      <button onClick={() => navigate("/kinh-te")}>Kinh tế</button>
      <button onClick={() => navigate("/thieu-nhi")}>Thiếu nhi</button>
    </div>
  );
};

export default MenuFront;
