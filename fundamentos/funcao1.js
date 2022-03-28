// Funcao sem retorno
//Toda função é relacionada à um bloco {}
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
//vai retornar um NaN, porque não definimos um padrão nos números.
imprimirSoma(2)


//Funcao com retorno
function soma(a,b = 0)
{
    return a + b
}
console.log(soma(2,3))
//vai retornar um valor correto, pois tem um padrão.
console.log(soma(2))