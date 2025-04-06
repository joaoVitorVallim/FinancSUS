import { Payment, MercadoPagoConfig } from 'mercadopago';
import { config } from 'dotenv';

config();

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
const payment = new Payment(client);

const card = async ({transaction_amount, token, description, installments, payment_method_id, payer, application_fee, id}) => {
    const response = await payment.create({
        body: {
            transaction_amount: transaction_amount,
            token: token,
            description: description,
            installments: installments,
            payment_method_id: payment_method_id,
            payer:{
                email: email,
                identification: {
                    type: "CPF",
                    number: number
                }
            },
            payer: payer,
            application_fee: application_fee,
            disbursements: {
                collector_id: id, 
                amount: amount   
            } 
        },
    });

    return response;
}