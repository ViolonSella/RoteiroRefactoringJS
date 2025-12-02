// apresentacao.js

const { formatarMoeda } = require("./util");

function gerarFaturaStr(fatura, calc) {
  let faturaStr = `Fatura ${fatura.cliente}\n`;

  for (let apre of fatura.apresentacoes) {
    const nomePeca = calc.repo.getPeca(apre).nome;
    faturaStr += `  ${nomePeca}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos)\n`;
  }

  faturaStr += `Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))}\n`;
  faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)}\n`;

  return faturaStr;
}

module.exports = gerarFaturaStr;
