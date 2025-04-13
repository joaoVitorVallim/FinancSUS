import { Payment, MercadoPagoConfig } from 'mercadopago';
import { config } from 'dotenv';

config();

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
const payment = new Payment(client);

export const card = async ({transaction_amount, token, description, installments, payment_method_id, payer, application_fee, id}) => {
    const response = await payment.create({
        body: {
            transaction_amount: transaction_amount,
            token: token,
            description: description,
            installments: installments,
            payment_method_id: payment_method_id,
            payer: {
                email: payer.email,
                identification: {
                    type: "CPF",
                    number: payer.identification.number
                }
            },
            application_fee: application_fee,
            disbursements: {
                collector_id: id, 
                amount: transaction_amount   
            } 
        },
    });

    return response;
};