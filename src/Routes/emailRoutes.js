import express from "express";
import { email } from '../Controllers/notController.js'

const notRouter = express.Router();

notRouter.post('/', email);

export default notRouter;