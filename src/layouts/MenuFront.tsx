import React from "react";
/* Import CSS cho MenuFront */
import "./css/MenuFront.css";

const MenuFront: React.FC = () => {
  return (
    <div className="menu-front">
      <button>Thể loại: Công nghệ</button>
      <button>Thể loại: Văn học</button>
      <button>Thể loại: Kinh tế</button>
      <button>Thể loại: Thiếu nhi</button>
    </div>
  );
};

export default MenuFront;
