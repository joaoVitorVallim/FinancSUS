import express from "express";
import { oauth, link, refreshToken } from "../Services/oauthService.js";
const oauthRouter = express.Router();

oauthRouter.get("/callback", oauth);

oauthRouter.get("/link", link);

oauthRouter.get("/token", refreshToken);

export default oauthRouter;