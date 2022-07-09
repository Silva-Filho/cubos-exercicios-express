import express from "express";

import { listarJogador } from "./controllers/listarJogador.js"; 

const servidor = express();

const porta = 3000;

servidor.get("/", listarJogador);

servidor.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});

