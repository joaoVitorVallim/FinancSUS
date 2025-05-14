import { payment } from "../Controllers/paymentController.js";
import { Router } from "express";
const paymentRouter = Router();


paymentRouter.post('/payment', payment);



export default paymentRouter;