import express from "express";

import { roteador } from "./routes.js";

const servidor = express();

const porta = 8000;

servidor.use(roteador);

servidor.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});

