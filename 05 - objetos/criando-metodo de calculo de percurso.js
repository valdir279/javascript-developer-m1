class carro {
  marca;
  cor;
  gastoMedioEmLitrosPorkm;

  constructor(marca, cor, gastoMedioEmLitrosPorkm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioEmLitrosPorkm = gastoMedioEmLitrosPorkm;
  }

  calcularGastoDePercurso(distancia, precoCombustivel) {
    return distancia * this.gastoMedioEmLitrosPorkm * precoCombustivel;
  }
}
const ford = new carro('ka' ,'vermelho', 1 / 12)
console.log(ford.calcularGastoDePercurso(70, 5));
const gol = new carro('wolksvagem', 'prata', 1 / 13);
console.log(gol.calcularGastoDePercurso(70, 5));

