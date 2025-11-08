import React from "react";
import "../assets/css/BookCard.css";
import { Book } from "../data/books";

type Props = {
  book: Book;
};

const BookCard: React.FC<Props> = ({ book }) => {
  return (
    <div className="book-card">
      {book.image && (
        <img src={book.image} alt={book.title} className="book-card-img" />
      )}
      <h3 className="book-card-title">{book.title}</h3>
      <p className="book-card-author">{book.author}</p>
      {book.price && (
        <p className="book-card-price">{book.price.toLocaleString()} ₫</p>
      )}
    </div>
  );
};

export default BookCard;
