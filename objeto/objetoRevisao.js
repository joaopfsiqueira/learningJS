//coleção dinâmica de pares chave/valor
const produto = new Object
//função produto, new é um criador de objeto.

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
//Sendo uma coleção dinâmica.

//Podemos até mesmo excluir
delete produto.preco
delete produto['marca do produto']
console.log(produto)

//Carro = conjunto de pares, chave e valor
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{ //par chave e valor com objetos dentro da variável
        nome: 'João',
        idade: 19,
        endereco: {
            logradouro: 'Rua Afonso Giannico',
            numero: 278
        }
    }, //Atributos que são arrays:
    condutores: [{
        nome: 'Fernanda',
        idade: 19
    }//podemos colocar um segundo objeto dentro do array, basta usar ,
    ,{
        nome: 'Gabriel',
        idade: 4,
    }], //podemos também colocar funções dentro da variável carro.
    acelerar: function(){
        //
    }
}

//Podemos acessar os atributos através da notação ponto:
carro.proprietario.endereco.numero = 1000

//Podemos acessar dessa forma também: 
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)


//é possível deletar objetos.
delete carro.condutores
delete carro.proprietario.endereco
delete carro.acelerar
console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length) irá retornar um erro visto que não existe.