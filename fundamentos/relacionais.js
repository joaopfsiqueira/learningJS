//EXEMPLOS DE VERDADEIRO OU FALSO
//O = = É UM COMANDO PARA SE SABER VERDADEIRO OU FALSO.
//'01)' só serve para organizar as informaçõe
console.log('01)', '1' == 1)

//= = = É ESTRITAMENTE. Levando ao pé da letra a informação.
console.log('02)', '1' ===1)

//NO EXEMPLO ABAIXO UTILIZAMOS DE ! = QUE É O MESMO QUE DIFERENTE
//A AFIRMAÇÃO VAI RETORNAR FALSE, POIS 3 NÃO É DIFERENTE DE 3.
//MESMO O PRIMEIRO 3 ESTANDO COMO ' ', SENDO STRING.
console.log('03)', '3' != 3)

//NO EXEMPLO ABAIXO UTILIZAMOS O ESTRITAMENTE DIFERENTE, COM ! = = 
//JÁ QUE É EXTRITAMENTE, VAI RETORNAR COMO TRUE, VISTO QUE UM É STRNG E O OUTRO INTEGER.
console.log('04)', '3' !== 3)

//MENOR, MAIOR, MENOR IGUAL, MAIOR IGUAL.
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)


//NO TESTE DE Data, o 0 RETORNA O PRIMEIRO DE JANEIRO DE 1970
//INFORMAÇÃO ACIMA NÃO TEM NADA A VER COM O TESTE.
// D1 = = = ESTRITAMENTE IGUAL 
const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)

//SOMENTE IGUAL
console.log('10)', d1==d2)

//ESTRITAMENTE IGUAL COM GETIME.
console.log('11)', d1.getTime() === d2.getTime())

//UNDEFINED E NULL? :
console.log('12)', undefined == null)
console.log('13)', undefined === null)

//EM VIA DE REGRAS, É MELHOR USAR O = = = DO QUE = = .