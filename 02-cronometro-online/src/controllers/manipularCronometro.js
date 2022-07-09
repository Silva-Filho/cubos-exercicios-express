import { cronometro } from "../data/cronometro.js";

export const mostrarCronometro = (req, res) => {
    res.send(cronometro.mostrar());
};

export const inciarCronometro = (req, res) => {
    cronometro.iniciar();
    
    res.send("Cronômetro iniciado!");
};

export const pausarCronometro = (req, res) => {
    cronometro.pausar();

    res.send("Cronômetro pausado!");
};

export const continuarCronometro = (req, res) => {
    cronometro.continuar();

    res.send("Cronômetro continuando!");
};

export const zerarCronometro = (req, res) => {
    cronometro.zerar();

    res.send("Cronômetro zerado!");
};

