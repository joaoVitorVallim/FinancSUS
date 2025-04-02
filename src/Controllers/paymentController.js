import { Payment, MercadoPagoConfig, PaymentRefund } from 'mercadopago';
import { config } from 'dotenv';
config();

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
const payment = new Payment(client);
const paymentRefund = new PaymentRefund(client);

const cardPayment = async (req, res) => {

    try {
        let { transaction_amount, token, description, installments, payment_method_id, issuer_id, payer } = req.body;

        
        

        const response = await payment.create({
            body: {
                transaction_amount: transaction_amount,
                token: token,
                description: description,
                installments: installments,
                payment_method_id: payment_method_id,
                payer: payer
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
        let { transaction_amount, description, payer } = req.body;

        transaction_amount = parseFloat(transaction_amount);

        const response = await payment.create({
            body: {
                   transaction_amount: transaction_amount,
                   description: description,
                   payment_method_id: "bolbradesco",
                   payer:payer,
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
        const { transaction_amount, description, payment_method_id, payer } = req.body;

        const response = await payment.create({
            body: { 
                transaction_amount: transaction_amount,
                description: description,
                payment_method_id: payment_method_id,
                    payer: payer
            },
        })

        return res.status(200).send(response);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}

const refundPayment = async (req, res) => {

    try {
        const { id } = req.body;

        const response = await paymentRefund.total(id);

        return res.status(200).send(response);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}

export { cardPayment, boletoPayment, pixPayment, refundPayment };
