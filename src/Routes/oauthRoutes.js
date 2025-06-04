import express from "express";
import { oauth, link, refreshToken } from "../Services/oauthService.js";
const oauthRouter = express.Router();
import cors from "cors";

oauthRouter.get("/callback", oauth);

oauthRouter.get("/link", cors({
    origin:'*',
}),link);

oauthRouter.get("/token", refreshToken);

export default oauthRouter;