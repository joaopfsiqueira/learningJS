//Ao executar o código abaixo, temos noção de que o mesmo vai dizer que o Objetc é uma função.
console.log(typeof Object)

//Já no código abaixo, nós instânciamos uma função, transformando em objeto.
console.log(typeof new Object)

//o mesmo caso declarando variável.
const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

//O mesmo para class
class Produto {} //PADRÃO ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)

//A PARTE DE CRIAR OBJETO É A PARTE DE UMA FUNÇÃO.