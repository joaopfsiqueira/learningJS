function getPreco (imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
}

const produto = {
    nome:'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20//em escopo global conseguimos informar qualquer valor.
global.desc = 0.1
console.log(getPreco())//vai retornar um NAN, pois não está acessando nada.
console.log(produto.getPreco())
//a diferença entre call e apply é a forma em que é chamado os parametros.

//chamando de outra forma
const carro = { preco: 50000, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
//ambos vão trazer o mesmo resultado.

//Podemos chamar de novo, sem precisar informar os valores novamente, usando o call
console.log(getPreco.call(carro, 0.17, '$'))

//no apply você terá que usar um array.
console.log(getPreco.apply(carro, [0.15, '$']))