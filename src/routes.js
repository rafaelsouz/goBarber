//Utilizando o sucrase para fazer as importações
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res)=>{
   return res.json({ message: "hello "});
})

export default routes