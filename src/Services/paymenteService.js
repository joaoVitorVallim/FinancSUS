import { MercadoPagoConfig, Payment } from "mercadopago";
import { config } from "dotenv";
import { User } from "../Model/userModel";
import { getBearer } from "../Fixtures/bearer";
config();

export const createPayment = async ({ payerEmail, transactionAmount }) => {
  try {

    const { client_id, client_secret, refresh_token } = User.findOne(getBearer(req.headers.authorization));

    const a = await axios.post('https://api.mercadopago.com/oauth/token', {
        grant_type: 'authorization_code',
        client_id: client_id,
        client_secret: client_secret,
        code: refresh_token,
        redirect_uri: process.env.REDIRECT_URI,
      }).data;

      console.log(a);

    const client = new MercadoPagoConfig({
      accessToken: process.env.MP_ACCESS_TOKEN,
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
