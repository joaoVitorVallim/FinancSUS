import axios from 'axios';
import dotenv from "dotenv";
import { User, Vakinha } from "../Model/userModel.js";
import qs from "qs";
import { getBearer } from '../Fixtures/bearer.js';
dotenv.config();

export const oauth = async (req, res) => {
  const { code, state } = req.query;

  console.log('foi');

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
        code: code,
        redirect_uri: process.env.REDIRECT_URI
      },
    );

    const { refresh_token } = response.data;

    console.log("Refresh Token:", refresh_token);

    const doc = await User.findByIdAndUpdate(
      state,
      { refresh_token },
    );

    return res.status(200).send();
  } catch (error) {
    return res.status(500).send(error.response?.data);
  }
};

export const link = async (req, res) => {

  try {

    const payload = getBearer(req.headers.authorization);
    
    const id = payload._id
    return res.status(200).send({url:`https://auth.mercadopago.com.br/authorization?client_id=${process.env.MP_CLIENT_ID}
      &response_type=code&platform_id=mp&redirect_uri=${process.env.REDIRECT_URI}&state=${id}`});
  } catch (error) {
    return res.status(500).send(error.message);
  }  
}

export const refreshToken = async (req, res) => {

  try {

    const payload = await Vakinha.findById(req.query.id)
    
    const user = await User.findById(payload.owner._id);

    const data = await axios.post(
    'https://api.mercadopago.com/oauth/token',
    qs.stringify({
      grant_type: 'refresh_token',
      client_id: process.env.MP_CLIENT_ID,
      client_secret: process.env.MP_CLIENT_SECRET,
      refresh_token: user.refresh_token,
      redirect_uri: process.env.REDIRECT_URI,
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )

  

  return res.status(200).send({
    public_key: data.data.public_key,
  });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.response?.data || "Erro ao atualizar o token.");
  }

}