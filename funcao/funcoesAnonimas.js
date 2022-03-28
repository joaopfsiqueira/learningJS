//Quando trabalhamos com funcoes anonimas podemos criar dentro de variavel
//deixar em branco e nomear depois.
//function anonima é só uma função sem nome.

//Criamos uma função sem nome.
const soma = function(x,y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}
imprimirResultado(3,4)
//podemos chamar uma funcao
imprimirResultado(3,5, soma)
//ou até mesmo passar outra funcao dentro da mesma. (SUPER COMUM)
imprimirResultado(3,7, function (x,y){
    return x - y
})

//Podemos colocar dentro de uma arrow function
imprimirResultado(2,8, (x, y) => x * y)

//podemos criar uma funcao dentro de objeto.
const pessoa = {
    falar: function(){
        console.log('Teste')
    }
}
//Podendo acessar a funcao por dentro de um atributo para objeto.
pessoa.falar()