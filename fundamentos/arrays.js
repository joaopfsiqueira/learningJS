//array é uma forma de se agrupar multiplos valores de forma linear.
//variáveis.
//Multiplos valores só em um único indentificador.
//é uma estrutura indexida. Você pode acessar todos os elementos.

//Essa é uma array de forma literal, utilizada entre colchetes.
//Temos 4 posições, separados por virgula.
const valores =  [7.7, 8.9, 6.3, 9.2]

console.log (valores [0], valores [3])

//É PARA RETORNAR UNDEFINED, visto que só tem 4 indices na variável, 0,1,2,3.
console.log (valores[4])

//podemos adicionar um elemento dentro dessa array de outra forma:
valores[4] = 10  //perceba que colocamos no indice 4, que é o proximo vago.
console.log(valores)

valores [5] = 5
console.log(valores)

//parar saber quantos elementos temos em um array, basta usar o código abaixo.
//lembrando que mostra a quantidade de elementos, mas afim de chamar um elemento deve-se começar
//a contar à partir do 0.
console.log(valores.length)

//E se pode adicionar varios tipos de valores dentro de uma array(string, boolean) misturando todos.
//AINDA SIM NÃO É UMA BOA PÁTRICA.
//O CERTO É TER UM ARRAY PARA CADA TIPO.
valores.push ({id: 3}, false, null, 'teste')
console.log(valores)

//O código abaixo retira o array o ultimo valor, trazendo sozinho.
console.log(valores.pop())

//outras formas de se excluir um valor do array é com o delete.
delete valores[0]
console.log(valores)

//O tipo de array? Object!
console.log(typeof valores)

