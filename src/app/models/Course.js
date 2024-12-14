// const { create } = require("handlebars");
const mongoose = require("mongoose");
var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, require: true,},
  description: { type: String, maxLength: 600 },
  image: { type: String},
  videoId: { type: String, maxLength: 255 },
  imageId: { type: String, maxLength: 255 },
  slug: { type: String, slug: "name", unique: true },
  // image: { type: String, maxLength: 255 },
  // createAt: { type: Date, default: Date.now },
  // updateAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Course", Course);