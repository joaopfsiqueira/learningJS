//NOVO RECURSO DO ES2015
//operador de desestruturação
//tira de uma estrutura tal coisa


const pessoa = {
    nome: 'João,',
    idade: '18 anos',
    endereco: {
        logradouro: 'Rua Afonso Giannico',
        numero: 278
    }
}

//no código abaixo, o que está sendo dito é, Extraia do objeto pessoa o nome e a idade.
const { nome, idade } = pessoa
console.log(nome,idade)

//uma outra forma é declarando variáveis.
const { nome : n, idade: i } = pessoa
console.log (n,i)

//Utilizando atributos que não existem no objeto em questão.
//Podemos definir um valor padrão ou não(gerando um undefined)
const {sobrenome = 'Siqueira,', bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)


//Mesclando o que existe e o criado agora.
const { endereco: {logradouro, numero, cep = '12515.160'}} = pessoa
console.log (logradouro, numero, cep)