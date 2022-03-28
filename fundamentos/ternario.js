//qual a diferença entre função e operador ternario?
//o ternário se utiliza: ?
//operador que tem 3 operandos. O primeiro é o nota maior igual a 7.
//se o mesmo for verdadeiro, vai retornar a primeira opção, se não, a segunda.
//no fim, somando 3 operarios. Expressão? 'Opção1': 'Opção2'.
//Foi também utilizado o método de ARROW.
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(nota = 7.1))
console.log(resultado(nota = 6))

//outro exemplo:
//const status = nome >= 7 ? 'Aprovado' : 'Reprovado'