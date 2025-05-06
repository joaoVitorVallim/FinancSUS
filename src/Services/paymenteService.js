import { MercadoPagoConfig, Payment } from 'mercadopago';
import { config } from 'dotenv';
config();

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });

const payment = new Payment(client);

export const createPayment = async ({ payerEmail, transactionAmount }) => {
    try {
        const paymentData = {
            
        };

        const response = await payment.create({
            body: {
                transaction_amount: parseFloat(transactionAmount),
                description: 'Produto A',
                installments: 1,
                payer: {
                    email: payerEmail,
                },
                payment_method_id: 'pix',
                
                application_fee: 10.00, // valor que o marketplace retém
                additional_info: {
                    items: [
                        {
                            id: '1234',
                            title: 'Produto A',
                            quantity: 1,
                            unit_price: transactionAmount
                        }
                    ]
                }
            }
        });
        return response;
    } catch (error) {
        return error.message;
    }
}
