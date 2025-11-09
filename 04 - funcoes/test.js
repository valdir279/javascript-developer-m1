function escreverMeuNome(nome) {
  return 'Meu nome é ' + nome;
}
escreverMeuNome('Valdir');
escreverMeuNome('Carmona');

function verificarIdade(idade){
  if (idade >=18) {
    console.log(escreverMeuNome ('valdir') + idade);

  } else {
    console.log('menor');
  }
}
verificarIdade(15);