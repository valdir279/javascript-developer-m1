class Pessoa {
  nome;
  idade;
  anoDeNascimento;
  
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2025 - idade;
  }

  descrever(){
    console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const valdir = new Pessoa('valdir', 52);
console.log(valdir);


// valdir.nome = 'valdir carmona';
// valdir.idade =52;

// const gabriel = new Pessoa();
// gabriel.nome = 'gabriel ferreira';
// gabriel.idade = 26;

// valdir.descrever();
// gabriel.descrever();
