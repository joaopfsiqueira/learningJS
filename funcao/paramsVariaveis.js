function soma(){
    let soma = 0
    for (i in arguments){//Arguments é um array interno podendo fazer qualquer operação
        //com vários valores
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3,4.4))
console.log(soma(1.2,3.2, " Teste"))
console.log(soma('a', 'b', 'c'))