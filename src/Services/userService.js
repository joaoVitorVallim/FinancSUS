import { hash, compare } from "bcrypt";
import pkg from "jsonwebtoken";
const { sign } = pkg;
import { User } from "../Model/userModel.js";

export class UserService {
    async createUser(name, email, password, collector) {
        try {
            const user = new User({
                name,
                email,
                password: await hash(password, 10),
                admin: false,
                refresh_token: null,
                collector
            });
            await user.save();
            return user;
        } catch (error) {
            throw new Error(`Erro ao criar usuário: ${error.message}`);
        }
    }

    async loginUser(email, password) {
        try {
            const jwtConfig = {
                expiresIn: '5d',
                algorithm: 'HS256',
            };

            const user = await User.findOne({ email });

            if (!user) {
                throw new Error('Usuário não encontrado');
            }

            const isValidPassword = await compare(password, user.password);
            if (!isValidPassword) {
                throw new Error('Senha inválida');
            }

            const token = sign({ data: user }, process.env.SECRET, jwtConfig);
            return {token, user};
        } catch (error) {
            throw new Error(`Erro no login: ${error.message}`);
        }
    }

    async updateUser(userId, updateData) {
        try {
            const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
            
            if (!user) {
                throw new Error('Usuário não encontrado');
            }

            return user;
        } catch (error) {
            throw new Error(`Erro ao atualizar usuário: ${error.message}`);
        }
    }
    async getUserById(userId) {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error('Usuário não encontrado');
            }
            return user;
        } catch (error) {
            throw new Error(`Erro ao buscar usuário: ${error.message}`);
        }
    }
    async deleteUser(userId){
        try {
            const user = await User.findByIdAndDelete(userId);
            if (!user) {
                throw new Error('Usuário não encontrado');
            }
            return user;
        } catch (error) {
            throw new Error(`Erro ao deletar usuário: ${error.message}`);
        }
    }

    async getAll(){
        try{
            return await User.find();
        } catch (error){
            throw new Error(error.message);
        }
    }
} 