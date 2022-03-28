// cadeia de protótipos (prototype chain)
const avo = {attr1: 'A'}
//para colocar como prototipo principal, devemos usar o __proto__: nome da principal, 
//os atributos da const filha
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

//podemos com isso, pegar um atributo de uma outra const que é principal.
//uma constante que o filho é subsequente.
console.log(filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing, sombreou a velmax : 200, na linha 14.
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //Super.status está sobreescrevendo o status lá em cima.
        //reutilizando, conceito de herança.
    }
}
//nesse momento, informamos que ferrari tem carro como prototipo
//ou melhor, ferrari é filha de carro.
//o que faz isso é o comando Object.setPrototypeof
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)//porém, volvo vai trazer apenas a function, sendo necessario declarar a função
//dessa forma, funciona.
volvo.acelerarMais(100)
console.log(volvo.status())


ferrari.acelerarMais(300)
console.log(ferrari.status())
//no caso da ferrari, ela vai chamar o próprio método, já que não foi reescrito o método dentro de ferrari.
