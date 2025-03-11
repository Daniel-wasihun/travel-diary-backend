const { getAllUsers, signup, login, getUserById } = require('../controllers/userController');  // Use 'require' instead of 'import'
const { Router } = require('express');  // Use 'require' instead of 'import'

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/signup', signup);
userRouter.post('/login', login);

// Use 'module.exports' instead of 'export default'
module.exports = userRouter;
