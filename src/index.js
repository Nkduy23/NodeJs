const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

// Khởi tạo ứng dụng
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình Handlebars
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Middleware
app.use(morgan('combined'));

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/old',(req, res) => {
  res.render('old');
})

// Lắng nghe cổng
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
