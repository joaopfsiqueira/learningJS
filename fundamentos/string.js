const escola = "Cod3r"

//o console informa que vai trazer so o 4 indice. 0 1 2 3 4 (quinto elemento.)
console.log(escola.charAt(4))

//pegando o valor dentro da tabela code ou unicode em forma de código html
console.log(escola.charCodeAt(3))

//Buscando indice relacionado à palavra dentro de aspas simples.
console.log(escola.indexOf('3'))

//Trazer resultado da letra em questão pra frente.
console.log(escola.substring(1))

//vai do indice 0 ao indice 3, mas não vai imprimir o 3. (EXEMPLO)
console.log(escola.substring(0,3))

//Para concatenar algo:
console.log('Escola '.concat(escola).concat("!"))
//OU
console.log('Escola ' + escola + "!")

//Para trocar determinada letra por outra.
console.log(escola.replace(3, 'e'))

//É possível pegar um string e transformar em uma array, que é uma posição linear. com o comando split
console.log('Ana, Maria, Pedro'.split(','))