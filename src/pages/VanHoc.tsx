import React from "react";

const VanHoc = () => {
  const books = [
    { id: 1, title: "Sông Đà" },
    { id: 2, title: "Dế Mèn Phiêu Lưu Ký" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sách Văn Học</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default VanHoc;
