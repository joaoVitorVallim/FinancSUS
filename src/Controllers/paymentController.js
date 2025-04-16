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
            transaction_amount: req.body.transaction_amount,
            description: req.body.description,
            payment_method_id: "pix",
            payer: {
                email: req.body.payer.email,
                first_name: req.body.payer.first_name,
                last_name: req.body.payer.last_name,
                identification: {
                    type: "CPF",
                    number: req.body.payer.identification.number,
                },
                address: {
                    street_name: req.body.payer.address.street_name,
                    street_number: req.body.payer.address.street_number,
                    zip_code: req.body.payer.address.zip_code,
                    neighborhood: req.body.payer.address.neighborhood,
                },
                phone: {
                    area_code: req.body.payer.phone.area_code,
                    number: req.body.payer.phone.number,
                }
            },
            date_of_expiration: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
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