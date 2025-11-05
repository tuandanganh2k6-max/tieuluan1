import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuTop from "./layouts/MenuTop";
import MenuFront from "./layouts/MenuFront";
import Footer from "./layouts/Footer";
import CongNghe from "./pages/CongNghe";
import VanHoc from "./pages/VanHoc";
import KinhTe from "./pages/KinhTe";
import ThieuNhi from "./pages/ThieuNhi";
import "./assets/css/App.css"; // import CSS global

export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <MenuTop />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<MenuFront />} />
            <Route path="/cong-nghe" element={<CongNghe />} />
            <Route path="/van-hoc" element={<VanHoc />} />
            <Route path="/kinh-te" element={<KinhTe />} />
            <Route path="/thieu-nhi" element={<ThieuNhi />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
