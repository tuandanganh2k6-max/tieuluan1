import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/MenuFront.css"; // file CSS riêng của bạn

const MenuFront: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-front">
      <div
  className="menu-front-logo-text"
  onClick={() => navigate("/")}
>
  Tiệm Sách Tuấn 📚
</div>


      {/* Các nút menu */}
      <div className="menu-front-buttons">
        <button onClick={() => navigate("/cong-nghe")}>Công nghệ</button>
        <button onClick={() => navigate("/van-hoc")}>Văn học</button>
        <button onClick={() => navigate("/kinh-te")}>Kinh tế</button>
        <button onClick={() => navigate("/thieu-nhi")}>Thiếu nhi</button>
      </div>
    </div>
  );
};

export default MenuFront;
