import userController from'../controllers/userController.js';
import express from 'express';
const userRouter = express.Router();

// Define routes for users
userRouter.get("/", userController.getUsers);
userRouter.post('/', userController.createUser);
userRouter.get('/:id', userController.getUserById);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);
export default userRouter;
