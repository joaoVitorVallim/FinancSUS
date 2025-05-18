import { UserService } from "../Services/userService.js";

const userService = new UserService();

export const createUser = async (req, res) => {
    try {
        const { name, email, password, collector } = req.body;
        await userService.createUser(name, email, password, collector);
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
        const token = await userService.loginUser(email, password);
        return res.status(200).send(token);
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

