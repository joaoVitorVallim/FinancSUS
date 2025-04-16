import { Payment, MercadoPagoConfig, PaymentRefund } from 'mercadopago';
import { config } from 'dotenv';
import { User } from '../Model/userModel.js';
config();

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
const payment = new Payment(client);

export const card = async ({transaction_amount, token, description, installments, payment_method_id, payer, collector_id}) => {
    try {
        
        const response = await payment.create({
            body:{
                transaction_amount: transaction_amount,
                token: token,
                description: description,
                installments: installments,
                payment_method_id: payment_method_id,
                payer: payer,
                
            },
            disbursements: {
                collector_id: 451032726,
                amount: 10,
            }
        });

        return response.status;
    }
    catch (error) {
        
        return error.message;
    }
}