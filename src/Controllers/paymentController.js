import { Payment, MercadoPagoConfig } from 'mercadopago';
import { config } from 'dotenv';

config();

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
const payment = new Payment(client);

const cardPayment = async (req, res) => {

    try {
        let { transaction_amount, token, description, installments, payment_method_id, payer, application_fee, id } = req.body;

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

        return res.status(200).send(response);
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
};

const boletoPayment = async (req, res) => {

    try {
        let { transaction_amount, description, payer, application_fee } = req.body;

        transaction_amount = parseFloat(transaction_amount);

        const response = await payment.create({
            body: {
                transaction_amount: transaction_amount,
                description: description,
                payment_method_id: "bolbradesco",
                payer:payer,
                application_fee: application_fee,
                disbursements: {  
                    collector_id: id, 
                    amount: amount  
                } 
            },
        });

        return res.status(200).send(response);
    }
    catch (error) {
        return res.status(400).send(error);
    }
};

const pixPayment = async (req, res) => {

    try {
        const { transaction_amount, description, payment_method_id, payer, application_fee } = req.body;

        const response = await payment.create({
            body: { 
                transaction_amount: transaction_amount,
                description: description,
                payment_method_id: payment_method_id,
                payer: payer,
                application_fee: application_fee, 
                disbursements: {  
                    collector_id: id, 
                    amount: amount  
                } 
            },
        })

        return res.status(200).send(response);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}

export { cardPayment, boletoPayment, pixPayment };
