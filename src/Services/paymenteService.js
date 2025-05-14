import { CardToken, MercadoPagoConfig, Payment } from "mercadopago";
import { config } from "dotenv";
import { User } from "../Model/userModel.js";
import { getBearer } from "../Fixtures/bearer.js";
import axios from "axios";
config();

export const createPayment = async ({ headers, body }) => {
  try {

    const payload = await getBearer(headers.authorization);
    const user = await User.findOne({ _id: payload._id });
    


    const data = await axios.post(
      'https://api.mercadopago.com/oauth/token',
      {
        grant_type: 'refresh_token',
        client_id: process.env.MP_CLIENT_ID,
        client_secret: process.env.MP_CLIENT_SECRET,
        refresh_token: user.refresh_token,
        redirect_uri: process.env.REDIRECT_URI,
      }
    );

    const client = new MercadoPagoConfig({
      accessToken:data.data.access_token,
    });

    const payment = new Payment(client);

    const response = await payment.create({
      body: {
        transaction_amount: body.transaction_amount,
        description: body.description,
        notification_url:'https://renewing-evidently-skunk.ngrok-free.app/notifications',
        installments: 1,
        payer: body.payer,
        token: body.token,
        issuer_id: body.issuer_id,
        payment_method_id: body.payment_method_id,
        additional_info: {
          items: body.items,
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
      ticket_url: response.point_of_interaction.transaction_data.ticket_url,
      barcode: response.point_of_interaction.transaction_data.barcode,
      barcode_base64: response.point_of_interaction.transaction_data.barcode_base64,
    }),
  }
  return formatters[body.payment_method_id]();
  
  }catch (error) {
    throw new Error("Erro ao criar pagamento: " + error.message);
  }
};
