//criando um array
const notas = [7.7, 6.6, 5.2, 8.9, 3.6, 7.1, 9.0]
//vamos extrair as notas menores que sete com duas abordagens.

//1ª abordagem:
let notasBaixas = []
    for (let i in notas){
        if (notas[i]< 7){
            notasBaixas.push(notas[i])
        }
    }
console.log(notasBaixas)

//fazendo o código acima com callback:
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})//se a nota for menor que 7, será verdadeiro.
//.filter é uma função que vai filtrar os elementos de um array
//uma função callback que vai retornar true ou false.
//se a função retornar true, quer dizer que o elemento deve ser retornado no array, sendo a resposta.
console.log(notasBaixas2)

//Um outro modo:
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)