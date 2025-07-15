const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  title: String,
  isLocked: Boolean,
  videoUrl: String
});

const courseSchema = new mongoose.Schema({
  id:{type:String,required:true,unique:true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  level: { type: String, required: true },
  instructor: { type: String },
  rating: { type: Number },
  reviews: { type: Number },
  image: { type: String }, // image path or URL
  createdAt: { type: Date, default: Date.now },
  modules: [moduleSchema],
});

module.exports = mongoose.model('Course', courseSchema);
