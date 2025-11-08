import React from "react";

const KinhTe = () => {
  const books = [{ id: 1, title: "Quản trị kinh doanh" }];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sách Kinh Tế</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default KinhTe;
