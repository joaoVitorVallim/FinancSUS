import express from "express";
import { emailNot } from '../Controllers/notController.js'

const notRouter = express.Router();

notRouter.post('/', emailNot);

export default notRouter;