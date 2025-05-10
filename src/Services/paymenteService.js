import { MercadoPagoConfig, Payment } from "mercadopago";
import { config } from "dotenv";
import { User } from "../Model/userModel.js";
import { getBearer } from "../Fixtures/bearer.js";
config();

export const createPayment = async ({ payerEmail, transactionAmount }) => {
  try {

    const { refresh_token } = User.findOne(getBearer(req.headers.authorization));

    const data = await axios.post('https://api.mercadopago.com/oauth/token', {
        grant_type: 'authorization_code',
        client_id: process.env.MP_CLIENT_ID,
        client_secret: process.env.MP_CLIENT_SECRET,
        code: refresh_token,
        redirect_uri: process.env.REDIRECT_URI,
      }).data;

      console.log(data);

    const client = new MercadoPagoConfig({
      accessToken: data.access_token,
    });

    const payment = new Payment(client);

    const response = await payment.create({
      body: {
        transaction_amount: parseFloat(transactionAmount),
        description: "Produto A",
        installments: 1,
        payer: {
          email: payerEmail,
        },
        payment_method_id: "pix",

        application_fee: 10.0, // valor que o marketplace retém
        additional_info: {
          items: [
            {
              id: "1234",
              title: "Produto A",
              quantity: 1,
              unit_price: transactionAmount,
            },
          ],
        },
      },
    });
    return response;
  } catch (error) {
    return error.message;
  }
};
