import { preference } from "../Controllers/paymentController.js";
import { Router } from "express";
const paymentRouter = Router();


paymentRouter.post('/preference', preference);

paymentRouter.post("/webhook", (req, res) => {
    if (req.body.action === "disbursement.transferred") {
      console.log("Repasse concluído:", req.body.data);
    }
  });

export default paymentRouter;