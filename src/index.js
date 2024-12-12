const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

// Khởi tạo ứng dụng
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true })); //Phân tích (parse) dữ liệu được gửi từ các biểu mẫu HTML (form) với phương thức POST hoặc PUT.
app.use(express.json()); //Phân tích (parse) dữ liệu JSON được gửi từ client, thường qua các API request với header, Chuyển dữ liệu JSON thành một đối tượng JavaScript và lưu trong req.body.

// Cấu hình Handlebars
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Middleware
// app.use(morgan('combined'));

// route init
route(app);

// Lắng nghe cổng
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
