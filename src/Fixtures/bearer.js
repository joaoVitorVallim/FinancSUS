import pkg from "jsonwebtoken";
const { verify } = pkg;

export const getBearer = (auth) => {


    const bearer = auth.split(' ');
    const token = bearer[1];

    try {
        const payload = verify(token, process.env.SECRET);
        return payload.data;
    } catch (error) {
        throw new Error("Token inválido ou expirado.");
    }
};