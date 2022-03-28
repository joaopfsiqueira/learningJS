//Criando uma classe com um construtor.
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    //instanciando função
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }

}
//criando uma variável para chamar a classe "Pessoa" e o construtor (nome)
const p1 = new Pessoa('João')
p1.falar()



//Criando uma arrow, obteremos o mesmo resultado.

const criarPessoa = nome => {
    return {
        falar:( ) => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('João')
p2.falar()