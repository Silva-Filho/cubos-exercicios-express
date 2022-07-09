# Back-end | Primeiro Servidor

## Exercícios

1. ControladorDeRodadas.com

Para este exercício deverá ser criado um servidor com nodejs para controlar rodadas de um jogo. Dado um array de nomes de jogadores que estará no script do servidor, deveremos a cada requisição ao servidor, responder com uma mensagem dizendo de quem é a vez de jogar.

Portanto, supondo que exista no script do servidor, o array **jogadores** abaixo:

```javascript=
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
```

A cada requisição, deveremos retornar uma mensagem ao navegador no seguinte formato:

```
É a vez de {nomeDoJogador} jogar!
```

Portanto, considerando o array de exemplo acima, na primeira requisição deverá ser retornado:

```
É a vez de José jogar!
```

Na segunda requisição:

```
É a vez de Maria jogar!
```

E assim por diante.

Após apresentar o nome do último jogador, a rodada finaliza e portanto, o próximo nome a ser retornado na próxima requisição deverá ser o do primeiro jogador, iniciando uma nova rodada.

O servidor deverá utilizar a porta 3000 e ser acessado através do endereço http://localhost:3000, para onde enviaremos as requisições e de onde receberemos as respostas com as mensagens mencionadas acima.

---

2. Cronômetro Online

Para este exercício deverá ser criado um cronômetro online que conte minutos e segundos apenas. Para isso, deveremos criar o servidor onde será contado o tempo do cronômetro. Este servidor deverá possuir os recursos: **principal** (raiz - onde o tempo atual do cronômetro será mostrado), **iniciar**, **pausar**, **continuar** e **zerar**. A seguir especificaremos como cada recurso deverá funcionar.

O servidor deverá funcionar escutando a porta 8000, através do endereço http://localhost:8000 onde funcionará o recurso principal (raiz).

**a) Recurso principal (raiz)**

No principal recurso do servidor, acessado através de http://localhost:8000 deverá ser retornada uma mensagem mostrando o tempo atual do cronômetro, seguindo o seguinte formato:

```
Tempo atual do cronômetro: 01 minutos e 07 segundos
```

Tanto os minutos quanto os segundos deverão ser mostrados com dois dígitos, completando com zero à esquerda quando necessário.

**b) Iniciar**

O recurso iniciar será responsável por iniciar a contagem do cronômetro e aplicar toda a lógica que for necessária para que o cronômetro funcione corretamente.

Este recurso deverá ser acessado através do endereço http://localhost:8000/iniciar

Após iniciar a contagem do cronômetro, este recurso deverá retornar a mensagem:

```
Cronômetro iniciado!
```

**Dica:** Para controlar o tempo do cronômetro no servidor pode ser utilizado o **setInterval()**.

**c) Pausar**

O cronômetro deverá também possuir um recurso para pausar o tempo do cronômetro.

Este recurso deverá ser acessado através do endereço http://localhost:8000/pausar

Após pausar a contagem do cronômetro, este recurso deverá retornar a mensagem:

```
Cronômetro pausado!
```

**d) Continuar**

Este recurso será responsável por continuar a contagem do tempo do cronômetro.

Este recurso deverá ser acessado através do endereço http://localhost:8000/continuar

Após continuar (resumir) a contagem do cronômetro, este recurso deverá retornar a mensagem:

```
Cronômetro continuando!
```

**e) Zerar**

Para finalizar, o cronômetro também deverá poder ser zerado através do recurso zerar.

Este recurso deverá ser acessado através do endereço http://localhost:8000/zerar

Após zerar os valores de minutos e segundos do cronômetro, este recurso deverá retornar a mensagem:

```
Cronômetro zerado!
```

**Importante:** O recurso **zerar** não deverá afetar o estado do cronômetro e também não deverá afetar o funcionamento dos outros recursos. Portanto se o cronômetro estiver parado e o recurso **zerar** for requisitado, após zerar os valores o cronômetro deverá se manter parado. O proporcional deverá acontecer para quando o cronômetro estiver executando a contagem (zerar os valores sem parar de contar).

---

###### tags: `módulo 2` `exercícios` `lógica` `nodeJS`
