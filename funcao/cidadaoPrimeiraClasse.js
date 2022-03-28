//Função em js é First-Clas Object (Citizens)
//Higher - order function
//Isso tudo significa que função é tratado como dado.
//Podendo ir como parametro, criar uma variável, passar função dentro de função.
//Enfim, um leque de possibilidades.

//Primeiro Exeplo, criar uma função de forma literal
//Essa função pode receber parametros e um valor.
//o bloco é obrigatório na função {}
function fun1() { }


//Podemos armazenar uma função em uma variável:
const fun2 = function() { }


//podemos armazenar uma função em um array []
const array = [ function (a,b) { return a + b }, fun1, fun2 ]
console.log(array[0](6,3))

//podemos também armazenar dentro de atributos de objetos
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())


//Como passar uma função com parametro para outra função
function run(fun) {
    fun()
}

run (function () { console.log('Executando....')})


//Podemos também RETORNAR/CONTER como parametros.
function soma(a,b){
    //uma função recebe a + b
    //porém ao invés de retornar uma equação, ele retorna uma outra função C
    return function (c) {
        console.log(a + b + c)
    }
}

//Para retornarmos o valor da function a cima
//explicando.
//soma (a,b) vai trazer um resultado, esse resultando vai somar com (c)
soma(2,3)(4)
//(2 + 3)(+4)

//Podemos fazer de uma outra maneira também
//Declarando uma variável para a primeira função, e depois chamar ela.
const cincoMais = soma(2,3) 
cincoMais(4)