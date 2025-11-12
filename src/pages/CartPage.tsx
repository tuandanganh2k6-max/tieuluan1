// src/pages/CartPage.tsx (PHIÊN BẢN HOÀN CHỈNH DÙNG CART CONTEXT)

import React from "react";
// ✅ Đảm bảo import đúng hook useCart từ CartContext
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage: React.FC = () => {
  // ✅ Lấy state giỏ hàng 'cart' và các hàm điều khiển từ useCart
  const { cart, removeFromCart, updateItemQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  // Hàm tính tổng phụ (Subtotal)
  const calculateSubtotal = () => {
    // Sử dụng state 'cart' thực tế
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const shippingFee = subtotal > 0 ? 30000 : 0; // Ví dụ: Phí ship 30,000 VNĐ
  const grandTotal = subtotal + shippingFee;

  // --- Xử lý sự kiện ---

  const handleRemove = (bookId: number) => {
    if (
      window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")
    ) {
      removeFromCart(bookId);
    }
  };

  const handleQuantityChange = (
    bookId: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1) {
      updateItemQuantity(bookId, value);
    } else if (!isNaN(value) && value === 0) {
      // Tùy chọn: Xóa sản phẩm nếu người dùng nhập 0
      handleRemove(bookId);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Giỏ hàng của bạn đang trống!");
      return;
    }
    alert(
      `Tổng cộng cần thanh toán: ${grandTotal.toLocaleString(
        "vi-VN"
      )} VNĐ. Chức năng thanh toán đang được phát triển!`
    );
  };

  // --- Hiển thị giao diện ---

  if (cart.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2 style={{ color: "#555" }}>Giỏ hàng của bạn đang trống 😟</h2>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Tiếp tục mua sắm
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2>🛒 Giỏ hàng của bạn ({cart.length} sản phẩm)</h2>

      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        {/* 1. Danh sách sản phẩm (Table) */}
        <div
          style={{
            flex: 3,
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f4f4f4" }}>
                <th
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  Sản phẩm
                </th>
                <th
                  style={{
                    width: "15%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "right",
                  }}
                >
                  Giá
                </th>
                <th
                  style={{
                    width: "15%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  Số lượng
                </th>
                <th
                  style={{
                    width: "15%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "right",
                  }}
                >
                  Tổng
                </th>
                <th
                  style={{
                    width: "5%",
                    padding: "10px",
                    border: "1px solid #ddd",
                  }}
                >
                  Xóa
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "50px",
                          height: "60px",
                          objectFit: "cover",
                          marginRight: "10px",
                        }}
                      />
                    )}
                    <div>
                      <div style={{ fontWeight: "bold" }}>{item.title}</div>
                      <div style={{ fontSize: "0.8em", color: "#666" }}>
                        {item.author}
                      </div>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      textAlign: "right",
                    }}
                  >
                    {item.price.toLocaleString("vi-VN")} ₫
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      textAlign: "center",
                    }}
                  >
                    {/* Input số lượng */}
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e)}
                      style={{
                        width: "50px",
                        padding: "5px",
                        textAlign: "center",
                        border: "1px solid #ccc",
                        borderRadius: "3px",
                      }}
                    />
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      textAlign: "right",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    {(item.price * item.quantity).toLocaleString("vi-VN")} ₫
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      textAlign: "center",
                    }}
                  >
                    <button
                      onClick={() => handleRemove(item.id)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "red",
                      }}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={clearCart}
            style={{
              marginTop: "15px",
              padding: "8px 15px",
              backgroundColor: "#f4f4f4",
              color: "#333",
              border: "1px solid #ccc",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Xóa toàn bộ giỏ hàng
          </button>
        </div>

        {/* 2. Tổng kết đơn hàng */}
        <div
          style={{
            flex: 1,
            border: "1px solid #007bff",
            borderRadius: "8px",
            padding: "20px",
            height: "fit-content",
            backgroundColor: "#f0f8ff",
          }}
        >
          <h3>Tổng kết đơn hàng</h3>
          <hr style={{ margin: "15px 0" }} />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>Tổng phụ ({cart.length} sản phẩm):</span>
            <span>{subtotal.toLocaleString("vi-VN")} ₫</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <span>Phí vận chuyển:</span>
            <span>{shippingFee.toLocaleString("vi-VN")} ₫</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "1.2em",
              fontWeight: "bold",
              borderTop: "2px dashed #007bff",
              paddingTop: "15px",
            }}
          >
            <span>Tổng cộng:</span>
            <span style={{ color: "red" }}>
              {grandTotal.toLocaleString("vi-VN")} ₫
            </span>
          </div>

          <button
            onClick={handleCheckout}
            style={{
              width: "100%",
              padding: "15px",
              marginTop: "25px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "1.1em",
              borderRadius: "5px",
            }}
          >
            Tiến hành Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
