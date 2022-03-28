//um par de chaves representa um objeto.
//O objeto é um grupo de chave e valor - {Valor}
//colchetes um array
//Podemos criar nomes em objetos dinâmicamente, por mais que na const esteja vazio.
const prod1 = {}
//Objeto dinâmico:
prod1.nome = 'S9'
prod1.marca = 'Samsung'
prod1.modelo = 'SM-G9600'
prod1.preco = '2500'
prod1['Camera'] = '12mp'  //mesmo podendo fazer da forma À esquerda não é recomendado(às vezes é necessário)
 
console.log(prod1)

//Uma outra forma de se organizar objetos(mais organizado):
const prod2 = {
    nome: 'IphoneX',
    marca: 'Apple',  
    valor: 4000
}
console.log(prod2)

//é possível se utilizar objetos com o mesmo nome, desde que seja o único dentro de outro determinado objeto.
//ex: versoes dentro de versoes.
const prod3 = {
    nome: 'MotoG7',
    marca: 'Motorola',  
    versoes: {
        versoes: 'Basic, Plus'
    }
}

console.log(prod3)
console.log (typeof prod3)

//JSON é um tipo de objeto, formulado dessa forma: 
//Perceba que os objetos são feitos por aspas.
const prod4 = '{"nome": "Camisa Polo", "Preco": 79.90 }'
console.log(prod4)