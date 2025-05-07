import axios from "axios";
import dotenv from "dotenv";
import { Vakinha } from "../Model/userModel";
import { getBearer } from "../Fixtures/bearer";
import { get } from "mongoose";
dotenv.config();

export const oauth = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("Código de autorização não encontrado.");
  }

  try {
    const response = await axios.post(
      "https://api.mercadopago.com/oauth/token",
      {
        grant_type: "authorization_code",
        client_id: process.env.MP_CLIENT_ID,
        client_secret: process.env.MP_CLIENT_SECRET,
        code,
        redirect_uri: process.env.REDIRECT_URI,
      }
    );

    const { access_token, refresh_token, public_key, user_id } = response.data;

    console.log("Dados recebidos:", {
      access_token,
      refresh_token,
      public_key,
      user_id,
    });

    await User.findOneAndUpdate(
      getBearer(req.headers.authorization),
      {
        refresh_token,
      }
    );

    return res.send("Conectado com sucesso ao Mercado Pago!");
  } catch (error) {
    return res.status(500).send("Erro ao obter o token de acesso.");
  }
};
