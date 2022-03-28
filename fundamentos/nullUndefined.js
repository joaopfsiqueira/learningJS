//No exemplo abaixo o valor undefined retornado é por conta de não atribuir nada À variável.
//sendo assim, um valor indefinido.
let valor //não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)
//null é um "valor", por conta disso, não retorna um Undefined.
//Sendo uma definição de valor em branco.


//console.log(valor.toString()) //vai gerar um erro, pois estamos converter um valor nulo.

//Vai retornar que preço que não está definido dentro do produto.
const produto = {}
console.log(produto.preco)
console.log(produto)


produto.preco = 3.50
console.log(produto)

produto.preco = undefined  //EVITE ATRIBUIR UNDEFINED (DEIXE PARA A PROPRIA LINGUAGEM ISSO.)
console.log(!!produto.preco)
//o retorno é o seguinte:
console.log(produto)

//para deixar explicito que um produto de fato não tem preço:
produto.preco = null
console.log(produto.preco)
//convertendo para boolean
console.log(!!produto.preco)
