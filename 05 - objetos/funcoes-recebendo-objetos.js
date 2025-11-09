class Pessoa {

}
function compararPessoas(p1, p2) {
   if (p1.idade > p2.idade) {
       console.log(`${p1.none} é mais velho(a) que ${p2.nome}`);
   } else if (p2.idade > p1.idade) {
       console.log(`${p2.none} é mais velho(a) que ${p1.nome}`);
   } else {
      console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
   }
}

const Valdir = new Pessoa('Valdir', 26);
const Gabriel = new Pessoa('Gabriel', 52);

compararPessoas(Valdir, Gabriel);