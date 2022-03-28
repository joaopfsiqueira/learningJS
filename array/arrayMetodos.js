const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//Não podemos mais atribuir nada nesse caso pois é uma const, mas podemos trabalhar no conteúdo do array.
pilotos.pop() //massa quebrou o carro.
console.log(pilotos)//perceba que só tem 3 elementos agora, o comando "pop" remove o ultimo elemento.

//Inserindo
pilotos.push('Verstappen')
console.log(pilotos)


pilotos.shift()//semelhante ao pop, ele elimina um, nesse caso é o primeiro.
console.log(pilotos)


//Inserindo de uma outra forma:
pilotos.unshift('Hamilton')// o comando unshift é o oposto do shift.
//ao invés de excluir, ele insere na primeira.
console.log(pilotos)




//Splice pode adicionar ou removo elementos

//Adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')//antes do raikkonen será adicionado o botas e o massa
//e não vai ser excluido nenhum segundo numero 0
console.log(pilotos)


//remover
pilotos.splice(3, 1)//MASSA QUEBROU NOVAMENTE.
//Segundo numero = 1 indice, será removivo.
console.log(pilotos)


//SLICE
//EXISTE UM MÉTODO PARA SE VIRAR UM NOVO ARRAY
const algunsPilotos1 = pilotos.slice(2) //slice(à partir de um indice)
console.log(algunsPilotos1)// trazendo os indice do 2 até o último.

//outro exemplo
const algunsPilotos2 = pilotos.slice(1, 4)//pegando de tal indice, até outro indice, sem incluir o ultimo.
console.log(algunsPilotos2)