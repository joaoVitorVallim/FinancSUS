import pkg from "jsonwebtoken";
const { verify } = pkg;
import { Vakinha } from "../Model/userModel.js";
import { config } from "dotenv";

config();


const getBearer = (req) => {
    const auth = req.headers.authorization;

    const bearer = auth.split(' ');
    const token = bearer[1];

    try {
        const payload = verify(token, process.env.SECRET);
        return payload;
    } catch (error) {
        throw new Error("Token inválido ou expirado.");
    }
};


export const createVakinha = async (req, res) => {
    try {
        const payload = getBearer(req);

        const vakinha = new Vakinha({
            title: req.body.title,
            description: req.body.description,
            goal: req.body.goal,
            owner: payload.data._id,
            collector_id: req.body.collector_id,
      });
      await vakinha.save();
      
      return res.status(200).send();
    } catch (error) {
      return res.status(400).send(error);
    }
};



export const getAllVakinhas = async (req, res) => {
    try {
      const vakinhas = await Vakinha.find();
      return res.status(200).send(vakinhas);
    } catch (error) {
        return res.status(400).send(error);
    }
  };


export const getVakinhaId = async (req, res) => {
    try {
        const vakinha = await Vakinha.findById(req.query.id);
        return res.status(200).send(vakinha);
    } catch (error) {
        return res.status(400).send(error);
    }
}

export const deleteVakinha = async (req, res) => {
    try {
        await Vakinha.findByIdAndDelete(req.query.id);
        
        return res.status(200).send();
    } catch (error) {
        return res.status(400).send(error);
    }
}




