// src/layouts/MenuTop.tsx (Đã sửa)

import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/MenuTop.css"; 

const MenuTop: React.FC = () => {
  return (
    <header className="menu-top">
      
      {/* ⬅️ LOGO bấm về trang chủ */}
      <Link to="/" className="menu-top-logo-link">
        <img src="/images/mau-logo-nha-sach.jpg" alt="Logo Tiệm Sách" className="menu-top-logo" />
      </Link>

      {/* MENU DANH MỤC SÁCH */}
      <nav className="menu-top-nav">
        
        {/* 1. MỤC CÔNG NGHỆ */}
        {/* ... (Giữ nguyên cấu trúc Dropdown) ... */}
        <div className="menu-top-dropdown">
          <div className="menu-top-dropdown-link-dummy">
            Công nghệ 
            <span className="dropdown-arrow">▼</span>
          </div>
          <ul className="menu-top-dropdown-content">
            <li><Link to="/cong-nghe/lap-trinh">Lập trình</Link></li>
            <li><Link to="/cong-nghe/ai-ml">AI & ML</Link></li>
            <li><Link to="/cong-nghe/bao-mat">Bảo mật</Link></li>
          </ul>
        </div>
        
        {/* 2. MỤC VĂN HỌC */}
        {/* ... (Giữ nguyên) ... */}
        <div className="menu-top-dropdown">
          <div className="menu-top-dropdown-link-dummy">
            Văn học 
            <span className="dropdown-arrow">▼</span>
          </div>
          <ul className="menu-top-dropdown-content">
            <li><Link to="/van-hoc/tiep-thuyet">Tiểu thuyết</Link></li>
            <li><Link to="/van-hoc/tho">Thơ</Link></li>
            <li><Link to="/van-hoc/truyen-ngan">Truyện ngắn</Link></li>
          </ul>
        </div>
        
        {/* 3. MỤC KINH TẾ */}
        {/* ... (Giữ nguyên) ... */}
        <div className="menu-top-dropdown">
          <div className="menu-top-dropdown-link-dummy">
            Kinh tế 
            <span className="dropdown-arrow">▼</span>
          </div>
          <ul className="menu-top-dropdown-content">
            <li><Link to="/kinh-te/tai-chinh">Tài chính cá nhân</Link></li>
            <li><Link to="/kinh-te/kinh-doanh">Khởi nghiệp & Kinh doanh</Link></li>
            <li><Link to="/kinh-te/dau-tu">Đầu tư</Link></li>
          </ul>
        </div>

        {/* 4. MỤC THIẾU NHI */}
        {/* ... (Giữ nguyên) ... */}
        <div className="menu-top-dropdown">
          <div className="menu-top-dropdown-link-dummy">
            Thiếu nhi 
            <span className="dropdown-arrow">▼</span>
          </div>
          <ul className="menu-top-dropdown-content">
            <li><Link to="/thieu-nhi/tranh-truyen">Truyện tranh</Link></li>
            <li><Link to="/thieu-nhi/giao-duc">Sách giáo dục</Link></li>
            <li><Link to="/thieu-nhi/ki-nang">Kỹ năng sống</Link></li>
          </ul>
        </div>
        
      </nav>
      
      {/* 🚀 BỔ SUNG: PHẦN CHỨC NĂNG (Đăng nhập, Giỏ hàng) */}
      <div className="menu-top-actions">
        
        {/* 1. NÚT ĐĂNG NHẬP */}
        <Link to="/dang-nhap" className="menu-top-action-link login-btn">
          👤 Đăng nhập
        </Link>
        
        {/* 2. NÚT GIỎ HÀNG */}
        <Link to="/gio-hang" className="menu-top-action-link cart-btn">
          🛒 Giỏ hàng (0)
        </Link>
      </div>

    </header>
  );
};

export default MenuTop;