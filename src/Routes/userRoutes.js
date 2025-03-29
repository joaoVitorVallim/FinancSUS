import { Router } from "express";
const userRouter = Router();
import { updateUser } from "../Controllers/userController.js";

userRouter.put('/:_id', updateUser);

export default userRouter;