import { createPayment } from "../Services/paymenteService.js"



export const preference = async (req, res) => {

    try {
        const response = await createPayment(req.body);
        
        return res.status(201).send(response);
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
};

