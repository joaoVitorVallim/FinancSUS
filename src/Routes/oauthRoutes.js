import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { oauth } from "../Services/oauthService";
const oauthRouter = express.Router();

oauthRouter.get("/callback", oauth);

export default oauthRouter;