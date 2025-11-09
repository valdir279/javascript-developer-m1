const pessoa = {
  nome: 'valdir c silva',
  idade: 52,
  descrever: function () {

    console.log(`meu nome é ${this.nome} e minha idadae é ${this.idade}`);
  }
};


console.log(pessoa['nome']);
