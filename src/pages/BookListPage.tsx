// src/pages/BookListPage.tsx

import React, { useEffect, useState } from "react";
import "../assets/css/BookListPage.css";
import BookCard from "../components/BookCard";

// Import cần thiết
import { supabase } from "../config/supabaseClient";
import { Book } from "../data/books";

type Props = {
  category: string;
};

const BookListPage: React.FC<Props> = ({ category }) => {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFilteredBooks() {
      setLoading(true);
      setError(null);

      // BỎ HÀM .toUpperCase() HOẶC .toLowerCase()

      // 1. CHUẨN BỊ MẪU TÌM KIẾM (Search Pattern)
      // Dùng .ilike() mạnh hơn, nhưng phải truyền vào một mẫu.
      // Chúng ta sẽ tìm kiếm category chứa giá trị truyền vào.
      // % là ký tự đại diện (wildcard) trong SQL.
      const searchPattern = `%${category}%`;

      // 2. TRUY VẤN SUPABASE VỚI ĐIỀU KIỆN LỌC DÙNG ILIKE
      const { data, error } = await supabase
        .from("booktail")
        .select("*")
        // THAY THẾ .eq() BẰNG .ilike()
        // ILIKE bỏ qua sự phân biệt chữ hoa/thường
        .ilike("category", `%${category}%`)
        .order("title", { ascending: true });

      if (error) {
        console.error(`Lỗi khi tải sách [${category}]:`, error);
        setError(error.message);
        setFilteredBooks([]);
      } else {
        // 3. Ép kiểu và Cập nhật State
        setFilteredBooks(data as Book[]);
      }
      setLoading(false);
    }

    fetchFilteredBooks();
  }, [category]);

  // --- Xử lý trạng thái tải và lỗi ---
  // ... (Không thay đổi)

  if (loading) {
    return (
      <div className="book-list-page">
        <h2>{category.toUpperCase()}</h2>
        <p>Đang tải danh sách sách {category} từ Supabase...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="book-list-page">
        <h2>{category.toUpperCase()}</h2>
        <p style={{ color: "red" }}>Lỗi tải dữ liệu: {error}</p>
      </div>
    );
  }

  // --- Hiển thị dữ liệu ---
  return (
    <div className="book-list-page">
      <h2>Danh mục: {category.toUpperCase()}</h2>
      {filteredBooks.length === 0 ? (
        <p>Không tìm thấy sách nào trong danh mục này.</p>
      ) : (
        <div className="book-list-grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookListPage;
