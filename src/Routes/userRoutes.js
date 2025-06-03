import { Router } from "express";
const userRouter = Router();
import { updateUser, deleteUser, getUserById, getAll, getUserByEmail } from "../Controllers/userController.js";

userRouter.get('/all', getAll);

userRouter.get('/email/find', getUserByEmail)

userRouter.put('/:_id', updateUser);

userRouter.delete('/:_id', deleteUser);

userRouter.get('/:_id', getUserById);


export default userRouter;