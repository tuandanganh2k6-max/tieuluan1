// src/pages/BookDetailPage.tsx (Cập nhật Thêm Giỏ hàng trực tiếp)

import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";
import { Book } from "../data/books";
import { useCart } from "../context/CartContext";

const BookDetailPage: React.FC = () => {
  // 'slug' trong route chứa ID (số)
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchBookDetail() {
      setLoading(true); // Chuyển slug (string) thành ID (số) để tìm kiếm chính xác

      const bookId = parseInt(slug || "0"); // TRUY VẤN BẰNG ID (Đây là logic đã được sửa và ổn định)
      const { data, error } = await supabase
        .from("booktail")
        .select("*")
        .eq("id", bookId)
        .limit(1);

      if (error || data === null || data.length === 0) {
        console.error("Không tìm thấy sách hoặc lỗi tải:", error);
        setBook(null);
      } else {
        setBook(data[0] as Book);
      }
      setLoading(false);
    }

    if (slug) {
      fetchBookDetail();
    }
  }, [slug]); // --- Xử lý trạng thái tải và lỗi ---

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
                Đang tải chi tiết sách...      {" "}
      </div>
    );
  }

  if (!book) {
    return <Navigate to="/" replace />;
  } // --- Hàm Thêm vào Giỏ hàng (ĐÃ SỬA ĐỔI) ---

  const handleAddToCart = () => {
    addToCart(book, 1);
    // ✅ THAY THẾ: Thông báo ngắn gọn và cập nhật giỏ hàng trực tiếp
    alert(`Đã thêm "${book.title}" vào giỏ hàng!`);
    // Loại bỏ window.confirm và navigate để không bị gián đoạn
  }; // --- Phần Đánh giá (Giữ nguyên) ---

  const ReviewSection = () => {
    const isLoggedIn = true;

    return (
      <div
        className="review-section"
        style={{
          marginTop: "30px",
          borderTop: "1px solid #ccc",
          paddingTop: "20px",
        }}
      >
                <h3>Đánh giá Sản phẩm</h3>       {" "}
        {isLoggedIn ? (
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
                        <h4>Viết đánh giá của bạn</h4>           {" "}
            <select style={{ padding: "8px" }}>
                            <option>5 Sao - Tuyệt vời</option>             {" "}
              <option>4 Sao - Tốt</option>             {" "}
              <option>3 Sao - Bình thường</option>           {" "}
            </select>
                       {" "}
            <textarea
              placeholder="Nội dung đánh giá..."
              rows={4}
              style={{ padding: "10px" }}
            ></textarea>
                       {" "}
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
                            Gửi Đánh Giá            {" "}
            </button>
                     {" "}
          </form>
        ) : (
          <p>
                        Vui lòng <a href="/dang-nhap">đăng nhập</a> để gửi đánh
            giá.          {" "}
          </p>
        )}
                <h4 style={{ marginTop: "20px" }}>Các Đánh giá đã có</h4>       {" "}
        <ul>
                    <li>**Nguyen Van A (5 sao):** Sách rất hay, nên đọc.</li>   
                <li>**Tran Thi B (4 sao):** Giao hàng hơi lâu.</li>       {" "}
        </ul>
             {" "}
      </div>
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
            <h1>{book.title}</h1>     {" "}
      <div style={{ display: "flex", gap: "30px" }}>
               {" "}
        <img
          src={book.image}
          alt={book.title}
          style={{ width: "300px", height: "auto", objectFit: "cover" }}
        />
               {" "}
        <div>
                   {" "}
          <p>
                        <strong>Tác giả:</strong> {book.author}         {" "}
          </p>
                   {" "}
          <p>
                        <strong>Giá:</strong>{" "}
            {book.price.toLocaleString("vi-VN")} VNĐ          {" "}
          </p>
                   {" "}
          <p>
                        <strong>Thể loại:</strong> {book.category}         {" "}
          </p>
                   {" "}
          <div style={{ marginTop: "20px" }}>
                        <h3>Mô tả</h3>           {" "}
            <p>{book.description || "Sách này chưa có mô tả chi tiết."}</p>     
               {" "}
          </div>
                   {" "}
          <button
            onClick={handleAddToCart}
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
                        Thêm vào Giỏ hàng          {" "}
          </button>
                 {" "}
        </div>
             {" "}
      </div>
            <ReviewSection />   {" "}
    </div>
  );
};

export default BookDetailPage;
