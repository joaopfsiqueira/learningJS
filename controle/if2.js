function teste1(num) {
    if (num > 7)
    console.log(num)
    //o console .log que não tem nada a ver com o num sempre vai ser executado:
    console.log('Final')
}

teste1(6)
teste1(8)



//outro exemplo:
//NÃO USE PONTO E VIRGULA NA DEFINIÇÃO
//no exemplo abaixo o que acontece é que o ; acaba com a definição, é como se o
//console.log não estivesse se referindo ao if, logo, sempre vai ser imprimido.
function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)

