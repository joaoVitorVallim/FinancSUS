


export const getBearer = (auth) => {


    const bearer = auth.split(' ');
    const token = bearer[1];

    try {
        const payload = verify(token, process.env.SECRET);
        return payload;
    } catch (error) {
        throw new Error("Token inválido ou expirado.");
    }
};