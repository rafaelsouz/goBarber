// Utilizando o sucrase para fazer as importações
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Declarando o authMiddleware aqui, para esse middleware valer para todos as rotas que vem abaixo.
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
