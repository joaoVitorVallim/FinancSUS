import { Router } from "express";
const router = Router();
import { createUser, loginUser } from "../Controllers/userController.js";

router.post('/register', createUser);

router.post('/login', loginUser);


export default router;