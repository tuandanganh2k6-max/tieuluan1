import React from "react";
import "../assets/css/BookListPage.css";
import BookCard from "../components/BookCard";
import { books } from "../data/books";

type Props = {
  category: string;
};

const BookListPage: React.FC<Props> = ({ category }) => {
  const filteredBooks = books.filter(
    (book) => book.category === category
  );

  return (
    <div className="book-list-page">
      <h2>{category}</h2>
      <div className="book-list-grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookListPage;
