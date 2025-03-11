const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Import userRoutes
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middleware
app.use(cors())
app.use(express.json()); // Middleware to parse JSON requests
app.use('/user', userRoutes);
app.use('/posts', postRoutes);

// mongodb+srv://daniel:danielwasihun@cluster0.e1hkl.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0


const PORT = 8000;
// mongoose.connect("mongodb://localhost:27017/crud")
mongoose.connect("mongodb+srv://daniel:danielwasihun@cluster0.e1hkl.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('MongoDB Connected...');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
  });
