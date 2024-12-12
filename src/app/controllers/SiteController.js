const Course = require('../models/Course');

class SiteController {
    // [GET] /
    // async index(req, res) {
    //     try {
    //         const courses = await Course.find({}); // Truy vấn danh sách khóa học
    //         res.json(courses); // Gửi phản hồi JSON
    //     } catch (error) {
    //         res.status(400).json({ error: 'ERROR' }); // Gửi phản hồi lỗi
    //     }
    // }
    index(req, res, next) {
        Course.find({})
            .then(courses => res.json(courses))
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search'); // Hiển thị trang tìm kiếm
    }
}

module.exports = new SiteController();
