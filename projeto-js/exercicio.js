if (typeof prompt === "undefined") {
    globalThis.prompt = require("prompt-sync")();

}

const nome = prompt ("qual é o seu nome? ");

const idade = Number(prompt ("qual é o seu idade? "));

console.log (`olá, ${nome}! Daqui a 10 anos você terá ${idade + 10} anos.`);


