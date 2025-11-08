import React from "react";

const CongNghe = () => {
  const books = [
    { id: 1, title: "React Nâng Cao" },
    { id: 2, title: "Node.js & Backend" },
    { id: 3, title: "AI & Machine Learning" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sách Công Nghệ</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CongNghe;
