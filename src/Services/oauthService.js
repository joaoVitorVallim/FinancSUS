import axios from 'axios';
import dotenv from "dotenv";
import { User } from "../Model/userModel.js";
import qs from "qs";
dotenv.config();

export const oauth = async (req, res) => {
  const { code, state } = req.query;

  if (!code) {
    return res.status(400).send("Código de autorização não encontrado.");
  }

  try {
    const response = await axios.post(
      "https://api.mercadopago.com/oauth/token",
      qs.stringify({
        grant_type: "authorization_code",
        client_id: process.env.MP_CLIENT_ID,
        client_secret: process.env.MP_CLIENT_SECRET,
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { refresh_token } = response.data;


    const doc = await User.findByIdAndUpdate(
      state,
      { refresh_token },
    );

    return res.status(200).send(doc);
  } catch (error) {
    return res.status(500).send(error.response?.data);
  }
};
