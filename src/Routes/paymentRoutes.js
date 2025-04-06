import { pixPayment, cardPayment, boletoPayment } from "../Controllers/paymentController.js";
import { Router } from "express";
const paymentRouter = Router();

paymentRouter.post('/card', cardPayment);
paymentRouter.post('/boleto', boletoPayment);
paymentRouter.post('/pix', pixPayment);

export default paymentRouter;