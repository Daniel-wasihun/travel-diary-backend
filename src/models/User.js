// Replace 'import' with 'require'
const { model, Schema, default: mongoose } = require('mongoose');  // Replacing 'import' with 'require'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  // posts: [{ type: String }],
  posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
});

// Replace 'export' with 'module.exports'
module.exports = model("User", userSchema);
