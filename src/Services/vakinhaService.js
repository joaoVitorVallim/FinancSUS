import { Vakinha } from "../Model/userModel.js";

export class VakinhaService {
    async createVakinha(title, description, goal, received, ownerId, image) {
        try {
            const vakinha = new Vakinha({
                title,
                description,
                goal,
                received,
                owner: ownerId,
                image 
            });

            await vakinha.save();
            return vakinha;
        } catch (error) {
            throw new Error(`Erro ao criar vakinha: ${error.message}`);
        }
    }

    async getAllVakinhas() {
        try {
            const vakinhas = await Vakinha.find();
            return vakinhas;
        } catch (error) {
            throw new Error(`Erro ao buscar vakinhas: ${error.message}`);
        }
    }

    async getVakinhaById(id) {
        try {
            const vakinha = await Vakinha.findById(id);
            if (!vakinha) {
                throw new Error('Vakinha não encontrada');
            }
            return vakinha;
        } catch (error) {
            throw new Error(`Erro ao buscar vakinha: ${error.message}`);
        }
    }

    async deleteVakinha(id) {
        try {
            const deletedVakinha = await Vakinha.findByIdAndDelete(id);
            if (!deletedVakinha) {
                throw new Error('Vakinha não encontrada');
            }
            return deletedVakinha;
        } catch (error) {
            throw new Error(`Erro ao deletar vakinha: ${error.message}`);
        }
    }

    async deleteVakinhaAll(){
        try{
            await Vakinha.deleteMany({})
        }catch(error){
            throw new Error(error.message)
        }
    }

    async getVakinhaImage(id) {
        const vakinha = await Vakinha.findById(id);
        if(!vakinha){
            throw new Error('Vakinha não encontrada');
        }
        if(!vakinha.image){
            throw new Error('Imagem não encontrada para essa vakinha');
        }
        return vakinha.image;
    }
} 
