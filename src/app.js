// Utilizando o sucrase para fazer as importações
import express from 'express';
import routes from './routes';

class App {
  // Inicializando o server, middlewares e routes
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
