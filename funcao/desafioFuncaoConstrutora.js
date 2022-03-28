//Uma função construtora, é uma função que possui entre() um construtor ao lado do nome da função.
//chamando o this.construtor = construtor dentro da mesma.

function Pessoa(nome){
        this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ('João')
p1.falar()