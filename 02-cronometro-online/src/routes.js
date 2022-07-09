import express from "express";

import { 
    continuarCronometro, 
    inciarCronometro, 
    mostrarCronometro, 
    pausarCronometro, 
    zerarCronometro 
} from "./controllers/manipularCronometro.js";

export const roteador = express();

roteador.get("/", mostrarCronometro);
roteador.get("/iniciar", inciarCronometro);
roteador.get("/pausar", pausarCronometro);
roteador.get("/continuar", continuarCronometro);
roteador.get("/zerar", zerarCronometro);

