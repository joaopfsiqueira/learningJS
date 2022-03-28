/*A condicional switch avalia uma expressão,
 combinando o valor da expressão para um cláusula case,
 e executa as instruções  associadas ao case
 */

 //CASE SIGNIFICA CASO

const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
        console.log('Quadro de Honra') 
        //sempre no fim de um case devemos colocar o break.
        //break serve para sair do switch e entrar em outro.
        break
        //podemos colocar case na mesma linha.
        case 8: case 7:
        console.log('Aprovado')
        break

        case 6: case 5: case 4:
        console.log('Recuperação')
        break

        case 3: case 2: case 1: case 0:
        console.log('Reprovado')
        break

        //Valor padrão
        //será utilizado quando nenhum case for true
        default:
        console.log('Nota Inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

//Sem break ocorre:

const imprimirResultado2 = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
        console.log('Quadro de Honra') 
        //break
        
        case 8: case 7:
        console.log('Aprovado')
        //break

        case 6: case 5: case 4:
        console.log('Recuperação')
        //break

        case 3: case 2: case 1: case 0:
        console.log('Reprovado')
        //break

        default:
        console.log('Nota Inválida')
    }
}

imprimirResultado2(10)

//o resultado acima foi que trouxe o valor de quadro de honra
//mas só pq foi o primeiro resultado, e repetiu os outros.
//se tivesse colocado n case 6, só repetiria recuperação pra baixo.
//Isso é um erro.