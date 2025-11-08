import React from "react";

const ThieuNhi = () => {
  const books = [{ id: 1, title: "Cô Bé Bán Diêm" }];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sách Thiếu Nhi</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ThieuNhi;
