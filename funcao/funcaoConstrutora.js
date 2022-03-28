function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //método publica
    //método para aumentar a velocidade.
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

        //método para pegar a velocidade atual.
    //método publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }

}
//definimos a velocidade máxima do carro como 200, e o Delta serve para informar
//de quanto em quanto em quanto a velocidade é aumentada

//Chamando a aceleração de determinado carro.
const uno = new Carro
uno.acelerar() //essa é a função que aumenta a velocidade, quanto mais vezes chamar, mais velocidade.
console.log("Uno: " + uno.getVelocidadeAtual())



const ferrari = new Carro (350, 20)
ferrari.acelerar()
console.log("Ferrari: " + ferrari.getVelocidadeAtual())


console.log(typeof Carro)
console.log(typeof ferrari)



const camaro = new Carro(250, 10)
camaro.acelerar()
camaro.acelerar()
camaro.acelerar()
console.log("Camaro: " + camaro.getVelocidadeAtual())