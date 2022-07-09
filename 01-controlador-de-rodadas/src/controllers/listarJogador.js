import { jogadores } from "../data/jogadores.js";

let i = 0;

export const listarJogador = (req, res) => {
    i = i < jogadores.length ? i : 0;

    res.send(`É a vez de ${jogadores[i]} jogar!`);
    i++;
};

