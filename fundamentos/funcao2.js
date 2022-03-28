// armazenando uma funcao em uma variável
const imprimirSoma = function (a,b ) {
    console.log(a + b)
 }


 imprimirSoma (2, 3)


 // Armazenando uma funcao arrow em uma variável
 // A seta substitui a function, dai o nome arrow
 const soma = (a,b) => {
    return a + b
 }

console.log(soma(7,3))


//retorno implicita
const subtracao = (a, b)  => a - b
console.log(subtracao(10,5))
//no código acima foi solicitado um retorno automáticamente por conta do const ser muito curto.
//sendo necessário apenas do console.log.

//Podemos diminuir ainda mais o código:
const imprimir2 = a => console.log(a)
imprimir2 ('Legal')