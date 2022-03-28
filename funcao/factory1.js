//Função Factory é uma função que retorna um objeto.

//Sem factory:
const prod1 = {
    nome: 'Produto',
    preco: 'Preço'
}

const prod2 = {
    nome: 'Produto2',
    preco: 'Preço2'
}

//com factory: (SIMPLES)
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())
//Dessa forma você cria novos objetos.
//"Factory" = Fábrica. Fábrica de objetos.