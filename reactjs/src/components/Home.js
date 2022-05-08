import React from 'react';
import Container from 'react-bootstrap/Container';



function Home(props) {
    return (
        <>
            <Container>
                <div className='home-container'>
                    <h3>Mục tiêu dự án</h3>
                    <p>- Sử dụng Nodejs tạo API gồm các chức năng:</p>
                    <ol>
                        <li>Đăng ký</li>
                        <li>Password Hashing</li>
                        <li>Đăng nhập</li>
                        <li>JSOn TOKEN WEB</li>
                        <li>Hiển thị User
                            <ul>
                                <li>Phân trang</li>
                                <li>Sort theo field</li>
                                <li>Tìm kiếm user</li>
                            </ul>
                        </li>

                        <li>Thêm user</li>
                        <li>Sửa user</li>
                        <li>Xóa user</li>
                    </ol>
                    <p><b>Website:</b></p>
                    <p><b>Github:</b></p>
                    <p>- Dùng thư viện React tạo một website sử dụng API!</p>
                    <p><b>Website:</b></p>
                    <p><b>Github:</b></p>
                </div>
            </Container>
        </>
    );
}

export default Home;