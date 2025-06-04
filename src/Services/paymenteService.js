import { MercadoPagoConfig, Payment } from "mercadopago";
import { config } from "dotenv";
import { User, Vakinha } from "../Model/userModel.js";
import axios from "axios";
config();

export const createPayment = async ({ query, body }) => {
  try {

    

    const payload = await Vakinha.findById(query.id)
    
    const user = await User.findById(payload.owner._id);


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
      accessToken: data.data.access_token,
    });

    const payment = new Payment(client);

    const response = await payment.create({
      body: {
        transaction_amount: body.transaction_amount,
        description: "doacao",
        notification_url: 'https://financsus-backend.onrender.com/notifications?email='+ body.payer.email + '&vid=' + query.id + '&name=' + body.payer.first_name,
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

    await sleep(20000)

  
    const formatters = {
      pix: () => ({
        method: 'pix',
        qr_code: response.point_of_interaction.transaction_data.qr_code,
        qr_code_base64: response.point_of_interaction.transaction_data.qr_code_base64,
      }),
      visa: () => ({
        method: 'credit_card',
        transaction_data: response.point_of_interaction.transaction_data,
        details: response.status_detail,
      }),
      bolbradesco: () => ({
        method: 'ticket',
        ticket_url: response.transaction_details.external_resource_url,
        barcode: response.transaction_details.digitable_line,
        barcode_base64: response.transaction_details.barcode,
      }),
    }

    console.log(response.status_detail)
    
    
    return formatters[body.payment_method_id]();

  } catch (error) {
    console.log(error)
    throw new Error(error.message);
  }
};


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));