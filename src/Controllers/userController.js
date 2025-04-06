import { hash, compare } from "bcrypt";
import pkg from "jsonwebtoken";
const { sign } = pkg;
import { User } from "../Model/userModel.js";

export const createUser = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: await hash(req.body.password, 10),
            admin: false,             
      });
      await user.save();
      return res.status(201).send();
    } catch (error) {
      return res.status(400).send(error);
    }
};

export const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;

        const jwtConfig = {
            expiresIn: '5d',
            algorithm: 'HS256',
        };

        const user = await User.findOne({ email });

        if (user && await compare(password, user.password)) {
            const token = sign({ data: user }, process.env.SECRET, jwtConfig);
            return res.status(200).send(token);
        }
        return res.status(401).send({ mensagem: 'Credenciais inválidas' });
    }
    catch(error){
        return res.status(400).send(error);
    }
};

export const updateUser =  async (req, res) => {
    try{
        
        const doc = await User.findByIdAndUpdate(req.params._id, req.body, { new: true });

        if(!doc){
            return res.status(404).send({ mensagem: 'Documento não encontrado' });
        }
        
        return res.status(200).send();
        

    } catch(error){
        return res.status(500).send({ mensagem: 'Erro ao atualizar o documento' });
    }
}

