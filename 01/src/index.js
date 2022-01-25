const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

/* É a vez de {nomeDoJogador} jogar! */

const express = require("express");

const app = express();

/* const nomeJogador = vetor => {

}; */

let i = 0;

app.get("/", (req, res) => {
    i = i < jogadores.length ? i : 0;

    res.send(`É a vez de ${jogadores[i]} jogar!`);
    i++;
} );

/* app.get("/", (req, res) => {
    for (const nome of jogadores) {
        res.send(`É a vez de ${nome} jogar!`);
    }
    res.send("Meu primeiro servidor!");
}); */

/* for (const nome of jogadores) {
    app.get("/", (req, res) => {
        res.send(`É a vez de ${nome} jogar!`);
    } );
}; */

const porta = 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});



