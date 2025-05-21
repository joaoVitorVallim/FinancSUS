import { User } from "mercadopago";
import { UserService } from "../Services/userService.js";

const userService = new UserService();

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await userService.createUser(name, email, password);
        return res.status(201).send({ message: 'Usuário criado com sucesso' });
    } catch (error) {
        return res.status(400).send({
            message: "Erro ao criar usuário",
            error: error.message
        });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const {token, user} = await userService.loginUser(email, password);
        
        return res.status(200).send(
            {
                message: 'Login realizado com sucesso',
                token,
                user: {
                    name: user.name,
                    email: user.email,
                }
            });
    } catch (error) {
        return res.status(401).send({
            message: "Erro no login",
            error: error.message
        });
    }
};

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params._id, req.body);
        return res.status(200).send({
            message: 'Usuário atualizado com sucesso',
            user: updatedUser
        });
    } catch (error) {
        return res.status(400).send({
            message: "Erro ao atualizar usuário",
            error: error.message
        });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params._id);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(404).send({
            message: "Usuário não encontrado",
            error: error.message
        });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params._id);
        return res.status(200).send({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        return res.status(400).send({
            message: "Erro ao deletar usuário",
            error: error.message
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const users = await userService.getAll();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(400).send({
            message: "Erro ao buscar usuários",
            error: error.message
        });
    }
};

