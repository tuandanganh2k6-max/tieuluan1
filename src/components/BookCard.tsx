// src/components/BookCard.tsx

import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/BookCard.css";
import { Book } from "../data/books"; // Đảm bảo type Book có trường 'id'

type Props = {
  book: Book;
};

// Loại bỏ hàm createSlug không cần thiết

const BookCard: React.FC<Props> = ({ book }) => {
  // ✅ Dùng book.id để tạo URL. Link sẽ là /sach/1, /sach/2, ...
  const bookId = book.id;
  return (
    <Link to={`/sach/${bookId}`} className="book-card-link">
           {" "}
      <div className="book-card">
               {" "}
        {book.image && (
          <img src={book.image} alt={book.title} className="book-card-img" />
        )}
                        <h3 className="book-card-title">{book.title}</h3>       {" "}
        <p className="book-card-author">{book.author}</p>               {" "}
        <div className="book-card-rating">
                      ⭐️⭐️⭐️⭐️ (4.0)        {" "}
        </div>
                       {" "}
        {book.price && (
          <p className="book-card-price">{book.price.toLocaleString()} ₫</p>
        )}
             {" "}
      </div>
         {" "}
    </Link>
  );
};

export default BookCard;
