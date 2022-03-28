console.log(soma(3,1))
//function declaration
//Formas de declarar uma função.
function soma (x,y){
    return x + y
}//um dos benefinicios dessa é que é possível informar o que vai dentro da função em códigos
//que existem antes da mesma.




//Um outro método é criando uma função e vincular ela em uma variável.
//chamada de function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3,8))




//named function expressios, não tão utilizada.
//uma função nomeada.
const mult = function mult(x,y){
    return x * y
}
console.log(mult(4,7))
//sua única vantagem é na hora do debug do código, porque seu nome vai aparecer.