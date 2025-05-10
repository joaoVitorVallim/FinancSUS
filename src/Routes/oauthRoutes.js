import express from "express";
import { oauth } from "../Services/oauthService.js";
const oauthRouter = express.Router();

oauthRouter.get("/callback", oauth);

export default oauthRouter;