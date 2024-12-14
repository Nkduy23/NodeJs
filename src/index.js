// Import các module cần thiết
const path = require('path'); // Hỗ trợ xử lý đường dẫn file và thư mục
const express = require('express'); // Framework để xây dựng server
const morgan = require('morgan'); // Middleware để log thông tin request
const handlebars = require('express-handlebars'); // Template engine để render giao diện

// Import các module tự định nghĩa
const route = require('./routes'); // Module định nghĩa route
const db = require('./config/db'); // Module cấu hình và kết nối cơ sở dữ liệu

// Khởi tạo ứng dụng
const app = express(); // Tạo ứng dụng express
const port = 3000; // Đặt cổng mà ứng dụng sẽ lắng nghe

// Kết nối cơ sở dữ liệu
db.connect(); // Kết nối đến database, được định nghĩa trong file config/db

// Middleware xử lý tệp tĩnh
app.use(express.static(path.join(__dirname, 'public'))); 
// Cung cấp quyền truy cập tới các file tĩnh như hình ảnh, CSS, JavaScript trong thư mục 'public'

// Middleware phân tích dữ liệu từ client
app.use(express.urlencoded({ extended: true })); 
// Phân tích dữ liệu từ các form HTML (POST/PUT) và lưu trong req.body dưới dạng object
app.use(express.json()); 
// Phân tích dữ liệu JSON từ client (thường từ các API request) và lưu trong req.body

// Cấu hình template engine (Handlebars)
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs', // Đặt phần mở rộng file template là .hbs
    }),
);
app.set('view engine', 'hbs'); 
// Đặt Handlebars làm template engine
app.set('views', path.join(__dirname, 'resources', 'views')); 
// Đặt thư mục chứa các file view

// Middleware logging (tùy chọn)
// app.use(morgan('combined')); 
// Ghi log chi tiết các request (comment vì có thể dùng khi cần)


// Khởi tạo route
route(app); 
// Truyền ứng dụng express vào file routes để định nghĩa các endpoint

// Lắng nghe và chạy ứng dụng
app.listen(port, () => {
    console.log(`App listening on port ${port}`); 
    // Xác nhận ứng dụng đang chạy trên cổng đã chỉ định
});
