import { CardToken, MercadoPagoConfig, Payment } from "mercadopago";
import { config, parse } from "dotenv";
import { User } from "../Model/userModel.js";
import { getBearer } from "../Fixtures/bearer.js";
import axios from "axios";
config();

export const createPayment = async ({ headers, body }) => {
  try {

    //const payload = await getBearer(headers.authorization);
    //const user = await User.findOne({ _id: payload._id });



    const data = await axios.post(
      'https://api.mercadopago.com/oauth/token',
      {
        grant_type: 'refresh_token',
        client_id: process.env.MP_CLIENT_ID,
        client_secret: process.env.MP_CLIENT_SECRET,
        refresh_token: "TG-6834f914ba50b1000104b533-451032726",
        redirect_uri: process.env.REDIRECT_URI,
      }
    );

    const client = new MercadoPagoConfig({
      accessToken: data.data.access_token,
    });

    const payment = new Payment(client);

    const response = await payment.create({
      body: {
        transaction_amount: body.transaction_amount,
        description: "doacao",
        notification_url: 'https://renewing-evidently-skunk.ngrok-free.app/notifications',
        installments: 1,
        payment_method_id: body.payment_method_id,
        payer: body.payer,
        token: body.token,
        issuer_id: body.issuer_id,
        additional_info: {
          items: [
            {
              title: "Doacao",
              description: "Doação para a vakinha",
              quantity: 1,
              unit_price: body.transaction_amount,
            }
          ]
        },
      },

    });
    const formatters = {
      pix: () => ({
        method: 'pix',
        qr_code: response.point_of_interaction.transaction_data.qr_code,
        qr_code_base64: response.point_of_interaction.transaction_data.qr_code_base64,
      }),
      credit_card: () => ({
        method: 'credit_card',
        transaction_data: response.point_of_interaction.transaction_data,
      }),
      bolbradesco: () => ({
        method: 'ticket',
        ticket_url: response.transaction_details.external_resource_url,
        barcode: response.transaction_details.digitable_line,
        barcode_base64: response.transaction_details.barcode,
      }),
    }

    
    return formatters[body.payment_method_id]();

  } catch (error) {
    throw new Error(error.message);
  }
};
