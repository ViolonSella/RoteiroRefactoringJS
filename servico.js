// servico.js

class ServicoCalculoFatura {
  constructor(repo) {
    this.repo = repo;
  }

  calcularTotalApresentacao(apre) {
    const peca = this.repo.getPeca(apre);
    let total = 0;

    switch (peca.tipo) {
      case "tragedia":
        total = 40000;
        if (apre.audiencia > 30) {
          total += 1000 * (apre.audiencia - 30);
        }
        break;
      case "comedia":
        total = 30000;
        if (apre.audiencia > 20) {
          total += 10000 + 500 * (apre.audiencia - 20);
        }
        total += 300 * apre.audiencia;
        break;
      // se houver outros tipos, trate aqui
      default:
        throw new Error(`Tipo de peça desconhecido: ${peca.tipo}`);
    }

    return total;
  }

  calcularCredito(apre) {
    let creditos = 0;
    creditos += Math.max(apre.audiencia - 30, 0);
    const peca = this.repo.getPeca(apre);
    if (peca.tipo === "comedia") {
      creditos += Math.floor(apre.audiencia / 5);
    }
    return creditos;
  }

  calcularTotalFatura(apresentacoes) {
    return apresentacoes
      .reduce((acc, apre) => acc + this.calcularTotalApresentacao(apre), 0);
  }

  calcularTotalCreditos(apresentacoes) {
    return apresentacoes
      .reduce((acc, apre) => acc + this.calcularCredito(apre), 0);
  }
}

module.exports = ServicoCalculoFatura;
