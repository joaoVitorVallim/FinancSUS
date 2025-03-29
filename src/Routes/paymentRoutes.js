import { pixPayment, cardPayment, boletoPayment, refundPayment } from "../Controllers/paymentController.js";
import { Router } from "express";
const paymentRouter = Router();

paymentRouter.post('/card', cardPayment);
paymentRouter.post('/boleto', boletoPayment);
paymentRouter.post('/pix', pixPayment);
paymentRouter.post('/refund', refundPayment);

export default paymentRouter;