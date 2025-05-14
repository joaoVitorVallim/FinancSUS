import express from "express";
import { oauth, link } from "../Services/oauthService.js";
const oauthRouter = express.Router();

oauthRouter.get("/callback", oauth);

oauthRouter.get("/link", link);

export default oauthRouter;