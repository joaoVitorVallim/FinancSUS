import { connect } from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import router from "./Routes/authRoutes.js";
import express, { json } from "express";
import { autenticar } from "./Middlewares/authMiddleware.js";
import paymentRouter from "./Routes/paymentRoutes.js";
import userRouter from "./Routes/userRoutes.js";

config();

const corsOptions = {
    credentials: true,
    origin: '*'
}

export const app = express();


app.use(json());


app.use(cors(corsOptions));

connect(process.env.CONN);


app.use("/auth", router);

app.use("/pay", paymentRouter);

app.use("/", userRouter);


app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});