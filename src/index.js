import { connect } from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import router from "./Routes/authRoutes.js";
import express, { json } from "express";
import { autenticar } from "./Middlewares/authMiddleware.js";
import paymentRouter from "./Routes/paymentRoutes.js";
import userRouter from "./Routes/userRoutes.js";
import vakinhaRouter from "./Routes/vakinhaRoutes.js";
import searchRouter from "./Routes/searchRouter.js";
import helmet, { xssFilter } from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";

config();

const corsOptions = {
    credentials: true,
    origin: '*'
}

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
  });

export const app = express();


app.use(json());

app.use(ExpressMongoSanitize());

app.use(helmet());

app.use(limiter);

app.use(cors(corsOptions));

connect(process.env.CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use("/search", searchRouter);

app.use("/auth", router);

app.use("/pay", paymentRouter);

app.use("/", userRouter);

app.use("/vakinha", vakinhaRouter);


app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});