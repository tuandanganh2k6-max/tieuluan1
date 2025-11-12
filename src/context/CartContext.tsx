// src/context/CartContext.tsx (PHIÊN BẢN ĐÃ SỬA LỖI MẤT TRẠNG THÁI BẰNG LOCAL STORAGE)

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Book } from "../data/books";

// Tên key lưu trong localStorage
const CART_STORAGE_KEY = "bookstore_cart";

// --- 1. Định nghĩa Types ---

// Định nghĩa kiểu dữ liệu cho một mục trong giỏ hàng (giữ nguyên cấu trúc của bạn)
export interface CartItem extends Book {
  quantity: number;
}

// Định nghĩa kiểu dữ liệu cho Context (giữ nguyên cấu trúc của bạn)
interface CartContextType {
  cart: CartItem[];
  addToCart: (book: Book, quantity?: number) => void;
  removeFromCart: (bookId: number) => void;
  // Thêm các hàm bạn đã đề cập nhưng chưa triển khai
  updateItemQuantity: (bookId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotalQuantity: () => number;
}

// Tạo Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// 2. Tạo Provider
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // ⭐️ BƯỚC QUAN TRỌNG 1: Khởi tạo state từ localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      // Lưu ý: Đảm bảo dữ liệu đọc ra khớp với CartItem[]
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Lỗi khi đọc giỏ hàng từ localStorage:", error);
      return [];
    }
  });

  // ⭐️ BƯỚC QUAN TRỌNG 2: Lưu state vào localStorage mỗi khi cart thay đổi
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Lỗi khi lưu giỏ hàng vào localStorage:", error);
    }
  }, [cart]); // --- Logic Giỏ hàng ---

  const addToCart = (book: Book, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === book.id);

      if (existingItem) {
        // Nếu sách đã có, cập nhật số lượng
        return prevCart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Nếu sách chưa có, thêm mới (sử dụng spread operator để copy thuộc tính Book)
        return [...prevCart, { ...book, quantity }];
      }
    });
  };
  const removeFromCart = (bookId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
  };

  const updateItemQuantity = (bookId: number, quantity: number) => {
    const newQuantity = Math.max(1, quantity);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === bookId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  // -------------------------

  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    clearCart,
    getCartTotalQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
            {children}   {" "}
    </CartContext.Provider>
  );
};

// 3. Tạo Custom Hook để dễ dàng sử dụng Context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
