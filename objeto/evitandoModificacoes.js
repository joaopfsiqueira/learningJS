//OBJECT.PREVENTEXTENSIONS
//esse comando impede que seja aumentando o numero de objetos, porém é possível excluir.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensível: ', Object.isExtensible(produto))

//´PODEMOS ALTERAR O NOME DE UM PRODUTO OU ALGO ASSIM DO TIPO, SÓ NÃO É POSSÍVEL INSERIR
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal  //SELAR
const pessoa = {nome: 'João', idade: 19}
Object.seal(pessoa)
//O que difere seal de extensions? Não pode nem adicionar e nem excluir!

console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' //NÃO VAI ADICIONAR.
delete pessoa.nome //NÃO VAI FUNCIONAR
pessoa.idade = 20 //CONSEGUE
console.log(pessoa)

//Object.freeze = selado + valores constantes, não pode adicionar, excluir ou alterar.
const carro = {marca: 'Ferrari', velMax: 350}
Object.freeze(carro)
//testando
console.log('Freezado:', Object.isFrozen(carro))

carro.preço = 2000000 //não vai funcionar
delete carro.marca //não vai funcionar
carro.velMax = 400 //não vai funcionar
console.log(carro)