//Uma regra que só permite numero entre outros numeros.
//&& significa e
//numer.prototype.entre é uma limitação do que é permitido.
//abaixo criamos que só vai retornar e ser permitido NUMBER.PROTOTYPE.NOME DO OBJETO
// = função que retorna 2 numeros, inicial e final.
//SEMPRE COM O THIS POR SER NUMERO
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

//logo depois criaremos a function que vai servir para nota entre inicial e final.

//ELSE IF SÃO CÓDIGOS PARA UMA SEGUNDA OPÇÃO.
const imprimirResultado = function(nota) {
    if(nota.entre(9,10)) /*entre 9 e 10)*/ {
        console.log('Quadro de Honra') //Então, se tirar entre 9 - inicio, 10 - fim
        //vai retornar quadro de honra.
    } else if (nota.entre(7, 8.99)) /* ELSE IF SERVE PARA CRIAR UMA SEGUNDA OPÇÃO
    neste caso, solicita entre 9,10 quadro de honra
    porém, 7 e 8.99 também vai receber algo como true, é isso que o else if diz
    ele não é false, e sim, uma segunda verdade. Uma segunda opção caso a primeira
    não tenha sido verdade. Se a primeira for verdade, a mesma não será executada. */{
        console.log('Aprovado! :)')
    } else if (nota.entre(4, 6.99)){ //OUTRA OPÇÃO. TRUE
        console.log('Recuperação! :|')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado! :(')//OUTRA OPÇÃO DE TRUE
    } else{
        console.log('Nota Inválida')//FALSE.
    }
    //ASSIM QUE SAIR DO IF ELSE IF VAI RETORNAR FIM, NÃO IMPORTA EM QUE MOMENTO SAIR
    //SE VAI SER NA PRIMEIR OPÇÃO, NA SEGUNDA, NA TERCEIRA OU NO FALSE
    console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)