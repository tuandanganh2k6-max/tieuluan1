import React from "react";
// Đảm bảo bạn có file Footer.css này trong src/assets/css
import "../assets/css/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Cột 1: Thông tin chung */}
        <div className="footer-col footer-col-info">
          <h4 className="footer-title">TIỆM SÁCH TUẤN TRẺ</h4>
          <p>
            Địa chỉ: 123 Đường Sách, Phường Công Nghệ, Quận Tri Thức, TP.HCM
          </p>
          <p>Mã số doanh nghiệp: 0312345678</p>
          <p>Email: hotro@tiemsach.vn</p>
          <p>Điện thoại: 1900 1234</p>
          <div className="footer-social">
            {/* Thêm các icon social media */}
            <a href="#" className="social-icon">
              F
            </a>
            <a href="#" className="social-icon">
              Z
            </a>
          </div>
        </div>

        {/* Cột 2: Dịch vụ */}
        <div className="footer-col">
          <h4 className="footer-title">DỊCH VỤ</h4>
          <ul className="footer-list">
            <li>
              <a href="/dieu-khoan-su-dung" className="footer-link">
                Điều khoản sử dụng
              </a>
            </li>
            <li>
              <a href="/chinh-sach-bao-mat" className="footer-link">
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="/he-thong-cua-hang" className="footer-link">
                Hệ thống nhà sách
              </a>
            </li>
            <li>
              <a href="/cau-hoi-thuong-gap" className="footer-link">
                Câu hỏi thường gặp
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 3: Hỗ trợ */}
        <div className="footer-col">
          <h4 className="footer-title">HỖ TRỢ</h4>
          <ul className="footer-list">
            <li>
              <a href="/huong-dan-mua-hang" className="footer-link">
                Hướng dẫn mua hàng
              </a>
            </li>
            <li>
              <a href="/chinh-sach-doi-tra" className="footer-link">
                Chính sách đổi trả
              </a>
            </li>
            <li>
              <a href="/phuong-thuc-thanh-toan" className="footer-link">
                Phương thức thanh toán
              </a>
            </li>
            <li>
              <a href="/van-chuyen" className="footer-link">
                Vận chuyển
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 4: Liên kết nhanh */}
        <div className="footer-col">
          <h4 className="footer-title">LIÊN KẾT NHANH</h4>
          <ul className="footer-list">
            <li>
              <a href="/cong-nghe" className="footer-link">
                Sách Công nghệ
              </a>
            </li>
            <li>
              <a href="/van-hoc" className="footer-link">
                Sách Văn học
              </a>
            </li>
            <li>
              <a href="/kinh-te" className="footer-link">
                Sách Kinh tế
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Dòng Copyright cuối cùng */}
      <div className="footer-bottom">
        <p> Được Thực hiện bởi: Đặng Anh Tuấn . MSSV 24150201 .</p>
      </div>
    </footer>
  );
};

export default Footer;
