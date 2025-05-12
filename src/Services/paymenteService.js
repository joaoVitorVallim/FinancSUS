import { MercadoPagoConfig, Payment } from "mercadopago";
import { config } from "dotenv";
import { User } from "../Model/userModel.js";
import { getBearer } from "../Fixtures/bearer.js";
import axios from "axios";
import qs from "qs";
import { get } from "mongoose";
config();

export const createPayment = async ({ headers, body }) => {
  try {


    const data = await axios.post(
        'https://api.mercadopago.com/oauth/token',
        {
        grant_type: 'refresh_token',
        client_id: process.env.MP_CLIENT_ID,
        client_secret: process.env.MP_CLIENT_SECRET,
        refresh_token: "TG-6822406af1220a00019affc9-2437794672",
        redirect_uri: process.env.REDIRECT_URI,
      }
    );

    const client = new MercadoPagoConfig({
      accessToken: "TEST-974371685041059-042100-dd49c50ae1c5bf18a9fd61d0f1c6612f-451032726",
    });

    const payment = new Payment(client);

    const response = await payment.create({
      body: {
        transaction_amount: 100.0,
        description: "Produto A",
        installments: 1,
        payer: {
          email: "butrico0@gmail.com",
        },
        payment_method_id: "pix",
        application_fee: 10.0, // valor que o marketplace retém
        additional_info: {
          items: [
            {
              id: "1234",
              title: "Produto A",
              quantity: 1,
              unit_price: 100.0,
            },
          ],
        },
      },
    });
    return response;
  } catch (error) {
    throw new Error("Erro ao criar pagamento: " + error.message);
  }
};
