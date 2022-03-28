//Como funciona herança em classe? 
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

//Através do comando extends, você cria herança entre as classes.
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){ //podemos pegar os construtores e criar um novo.
        super(sobrenome) //passamos super (sobrenome) para instânciar o sobrenome do avô. SEMPRE USAMOS.
        this.profissao = profissao
    } 
}

class Filho extends Pai{
    constructor (){
        super('Siqueira')
    }
}

//Retornando o filho:
const filho = new Filho
console.log(filho)