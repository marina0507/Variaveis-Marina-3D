const { AsyncLocalStorage } = require("async_hooks");

let anoAtual = 2024;
const nomeCompleto = "Marina";
let idade = 17;
const cursoFaculdade = "Marketing digital";
let cidadeAtual = "SJP";

console.log('olá eu sou o ${nomeCompleto}'), eu temho ${idade} AsyncLocalStorage, moro em ${cidadeAtual}, quero ano que vem estar cursando ${cursoFaculdade};

anoAtual = 2025;
idade = 18;
cidadeAtual = "Curitiba";
console.log('Para o ano que vem, meu nome ainda será ${nomeCompleto}, minha idade vai ser ${idade}, pretendo estar morando em ${cidadeAtual} e espero cursar ${cursoFaculdade}. ');
