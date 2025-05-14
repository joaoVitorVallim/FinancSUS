import { createPayment } from "../Services/paymenteService.js"



export const payment = async (req, res) => {

    try {
        
        const response = await createPayment(req);
        
        return res.status(201).send(response);
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
};

