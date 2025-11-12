// src/pages/LoginPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // ✅ Đây là nơi bạn sẽ gọi API để xác thực người dùng
        
        // Mô phỏng thành công đăng nhập:
        alert("Đăng nhập thành công! (Mô phỏng)");
        
        // Chuyển hướng về trang chủ
        navigate('/'); 
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Đăng Nhập Tài Khoản</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        required 
                        style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
                    />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input 
                        type="password" 
                        required 
                        style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
                    />
                </div>
                <button 
                    type="submit" 
                    style={{ padding: '10px', backgroundColor: 'teal', color: 'white', border: 'none', cursor: 'pointer' }}
                >
                    Đăng Nhập
                </button>
            </form>
            <p style={{ marginTop: '15px', textAlign: 'center' }}>
                Chưa có tài khoản? <a href="/dang-ky">Đăng ký ngay</a>.
            </p>
        </div>
    );
};

export default LoginPage;