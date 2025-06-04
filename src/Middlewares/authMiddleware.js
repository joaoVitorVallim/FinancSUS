import pkg from 'jsonwebtoken';
const { verify } = pkg;
import dotenv from 'dotenv';
dotenv.config();

export const autenticar = async (req, res, next) => {

  if(req.path === "/auth/register" || req.path === "/auth/login" 
    || req.path === "/vakinha/all" || (req.path.startsWith("/vakinha/"))
    || req.path === "/search" || req.path.startsWith('/oauth') || req.path.startsWith('/notifications')) {
    return next();
  }

  const auth = req.headers.authorization;

  if(!auth){
    return res.status(401).json({ mensagem: 'Sem autorização necessaria' });
  }

  const bearer = auth.split(' ');
  const token = bearer[1];

  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  try {
    
    const payload = verify(token, process.env.SECRET);

    req.usuario = payload;
    next();
  } catch (erro) {
    res.status(401).json({ mensagem: 'Token inválido' });
  }
};

export const autorizarAdmin = async (req, res, next) => {
  const auth = req.headers.authorization;
  const bearer = auth.split(' ');
  const token = bearer[1];

  try {
    const payload = verify(token, process.env.SECRET);
    if (!payload.data.admin) return res.status(403).json({ mensagem: 'Acesso negado' });

    req.usuario = payload;
    next();
  } catch (erro) {
    res.status(401).json({ mensagem: 'Token inválido' });
  }
};
