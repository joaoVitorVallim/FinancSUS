import { card } from "../Services/paymenteService.js"

   

const cardPayment = async (req, res) => {

    try {
        const response = await card(req.body);

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

        const response = await payment.create( {
            body: {
                transaction_amount: transaction_amount,
                description: description,
                payment_method_id: "bolbradesco",
                payer: payer,
            },
        });

        return res.status(200).send({
            link:response.transaction_details.external_resource_url,
            status: response.status,
            transaction_id: response.id,
            response: response.transaction_details.barcode,
            expiration_date: response.transaction_details.expiration_date,
        });
    }
    catch (error) {
        return res.status(400).send(error);
    }
};

const pixPayment = async (req, res) => {

    try {
        

        const body = {
            transaction_amount: 50.52,
            description: "Pagamento via PIX",
            payment_method_id: "pix",
            payer: {
                email: "butrico0@gmail.com",
                first_name: "APRO",
                last_name: "",
                identification: {
                    type: "CPF",
                    number: "12345678909"
                },
                address: {
                    street_name: "Rua Exemplo",
                    street_number: "590",
                    zip_code: "13844060"
                },
                phone: {
                    area_code: "19",
                    number: "989751609"
                }
            },
            date_of_expiration: new Date(Date.now() + 30 * 60 * 1000).toISOString() // 30 minutos para expirar
        };

        const response = await payment.create({
            body: body
        });

        return res.status(200).send(response);
    }
    catch (error) {
        return res.status(400).send(error);
    }
}

export { cardPayment, boletoPayment, pixPayment };