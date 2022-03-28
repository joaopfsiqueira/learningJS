//por mais que a variavel seja a mesma, a questão de escopo retorna só o valor 2.
//se tivesse uma function no numero2, ambos os numeros sairiam no console log.
//Isso é questão de escopo, pois a variável numero é global.

var numero = 1
{
    var numero = 2
    console.log('dentro =',numero)
}
console.log('fora=', numero)