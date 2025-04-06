import { Payment, MercadoPagoConfig } from 'mercadopago';
import { config } from 'dotenv';

config();

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
const payment = new Payment(client);

export const card = async ({transaction_amount, token, description, installments, payment_method_id, payer, application_fee, id}) => {

    
    const response = await payment.create({
        body: {
            transaction_amount: parseFloat(transaction_amount),
            token: token,
            description: description,
            installments: installments,
            payment_method_id: payment_method_id,
            payer: payer,
        },
    });

    return response;
}

export const boleto = async (transaction_amount, description, payer) => {
    try {

        const response = await payment.create({
            body: {
                transaction_amount: parseFloat(transaction_amount),
                description: description,
                payment_method_id: "bolbradesco",
                payer: payer,
            },
        });
        return response;
    } catch (error) {
        throw new Error("Erro ao processar pagamento com boleto.");
    }
};
