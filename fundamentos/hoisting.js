//Hoisting é o içamento, VAR é um hoisting, é um metodo em que pode se declarar o console antes da variavel.
//o exemplo abaixo explica:
console.log('a = ',a)
var a = 2 
console.log('a = ',a)
//a variavel é jogada para cima, rodando o código, retornando o undefined (que é diferente de erro)
//o que o hoisting fez com o código: 
var a
console.log('a = ',a)
a = 2 
console.log('a = ',a)

//NO LET ISSO NÃO FUNCIONA.
console.log('b = ',b)
let b = 2
console.log('b =', b)
