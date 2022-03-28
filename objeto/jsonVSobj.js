//JSON É UM FORMATO DE DADOS, usar um formato textual, genérico.
//que não carrega uma especificação de algo próprio para tal plataforma.
//Algo universal.
//JavaScript Object Notation, é um formato compacto, de padrão aberto independente
//de troca de dados simples e rápida entre sistemas
const obj = {a:1, b:2, c:3, soma(){
    return a + b + c
}}
//Vamos converter Objeto para JSON.
console.log(JSON.stringify(obj))
//o comando JSON.stringify retorna isso.
//Retornando uma string, mesmo antes não sendo. Sendo um formato textual.
//Sendo diferente do Objeto STRING do js.


//Fazendo o contrário, transformando um JSON em um objeto.
//Colando entre "" para que seja uma string.

//irá retornar um erro:
//console.log(JSON.parse("{a:1, b:2, c:3}"))

//também irá retornar um erro:
//console.log(JSON.parse("{ 'a':1, 'b':2, 'c':3}"))

//Por que retornou erro? porque SEMPRE é necessário abrir os TEXTOS com aspas.
//e o objeto maior aspas simples, demonstrando:
console.log(JSON.parse('{"a": 1, "b":2, "c": 3}'))
//feito a conversão de JSON para OBJETO.

//Outras funções que o JSON suporta:
//int, string, boolean, array
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))