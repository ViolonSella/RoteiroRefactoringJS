// index.js reestruturado apenas para realizar as chamadas de função assim como pede o roteiro e o meu toque ("*O*")

const { readFileSync } = require('fs');  //requisita o fs
const Repositorio = require('./repositorio.js'); // requisita a classe repositorio
const ServicoCalculoFatura = require('./servico.js'); // aqui requisita os calculos 
const gerarFaturaStr = require('./apresentacao.js'); // aqui requisita a geração da fatura
 
const faturas = JSON.parse(readFileSync('./faturas.json')); // parse do json (DURO IGUAL VIVER AO LADO DA LOIRINHA :P)!

const repo = new Repositorio();
const calc = new ServicoCalculoFatura(repo);

const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);   