// Estrategia 1 para gerar valor padrão
//utilizando o || (ou)afim de declarar um valor padrão.
function soma1 (a,b,c) 
{
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}


console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))

//Quando colocamos 0, o valor vai dar falso, retornando o segundo elemento (1)
//como se fosse um bug.


//estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b,c ){
    //colocamos um estritamente diferente ! ==
    a = a !== undefined ? a :1
    
    b = 1 in arguments ? b : 1

    c = isNaN(c) ? 1 : c //mais seguro

    return a + b + c
}
//neste caso, o zero se manteve.
console.log(soma2(), soma2(1), soma2(1,2,3), soma2(0,0,0))

//valor padrão do ES2015
//mais fácil
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(1), soma3(3,4,5), soma3(0,0,0))