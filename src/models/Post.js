const { model, Schema, default: mongoose } = require('mongoose');  // Replacing 'import' with 'require'


const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    // type: String,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
