import pkg from "jsonwebtoken";
const { verify } = pkg;
import { Vakinha } from "../Model/userModel.js";
import { config } from "dotenv";
import { getBearer } from "../Fixtures/bearer.js";
import { VakinhaService } from "../Services/vakinhaService.js";


config();

const vakinhaService = new VakinhaService();

export const createVakinha = async (req, res) => {
    try {
        const payload = getBearer(req.headers.authorization);
        const { title, description, goal, received } = req.body;
        const image = req.file ? req.file.buffer : null;

        const vakinha = await vakinhaService.createVakinha(
            title,
            description,
            goal,
            received,
            payload._id,
            image
        );
        
        return res.status(200).send(vakinha);
    } catch (error) {
        return res.status(400).send({
            message: "Erro ao criar vakinha",
            error: error.message
        });
    }
};

export const getAllVakinhas = async (req, res) => {
    try {
        const vakinhas = await vakinhaService.getAllVakinhas();
        return res.status(200).send(vakinhas);
    } catch (error) {
        return res.status(400).send({
            message: "Erro ao buscar vakinhas",
            error: error.message
        });
    }
};

export const getVakinhaId = async (req, res) => {
    try {
        const vakinha = await vakinhaService.getVakinhaById(req.query.id);
        return res.status(200).send(vakinha);
    } catch (error) {
        return res.status(400).send({
            message: "Erro ao buscar vakinha",
            error: error.message
        });
    }
};

export const deleteVakinha = async (req, res) => {
    try {
        await vakinhaService.deleteVakinha(req.params.id);
        return res.status(200).send({
            message: "Vakinha deletada com sucesso"
        });
    } catch (error) {
        return res.status(400).send({
            message: "Erro ao deletar vakinha",
            error: error.message
        });
    }
};

export const deleteVakinhaAll = async (req,res) => {
    try{
        await vakinhaService.deleteVakinhaAll();
        return res.status(200).send({
            message: "Deletado todas as vakinhas"
        })
    } catch (error) {
        return res.status(400).send({
            message: "Erro ao deletar todas as vakinhas",
            error: error.message
        })
    }
}

export const getVakinhaImage = async (req, res) => {
    try {
        const image = await vakinhaService.getVakinhaImage(req.params.id);
        if (!image) {
            return res.status(404).send({
                message: "Imagem não encontrada"
            });
        }
        
        res.set('Content-Type', 'image/png');
        return res.send(image);
    } catch (error) {
        return res.status(400).send({
            message: "Erro ao buscar imagem",
            error: error.message
        });
    }
}
