// Verificando seu o usuario está logado

import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // Destruturando para pegar a primeira posição do array, dessa forma descantando a string Bearer.
  const [, token] = authHeader.split(' ');

  try {
    // Para não utilizar o padrão de callback, foi utilizado promisify para transformar o cb
    // em um função assíncrona(em uma promise).
    // promisify retorna outra função, porém sem precisar para passar o cb
    // e logo após tou chamando a função sem cb passando como parametro o token e o secret
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    // Dentro do decoded, tem o id do usuario, pois passamos como payload, qnd criamos o token em sessioncontroller
    req.userId = decoded.id;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
