const aprovados = ['João', 'Pedro', 'Siqueira']

//Criamos uma array com uma lista de nomes
//Queremos percorrer esse array, então, utilizamos o forEach, assim, realizar um callback.

//o primeiro elemento da function vai o nome, depois o número do indice.
aprovados.forEach(function(nome, indice, array)//podemos colocar o próprio array como retorno.
{
    console.log(`${indice + 1}) ${nome}`)
    //console.log(array) basta tirar o // da linha.
})
//Funciona da seguinte forma:
//A cada vez que for chamado um elemento, vai retornar o que está dentro do foreach.



//Podemos fazer utilizando Arrow, mais simples.
aprovados.forEach(nome => console.log(nome))



//Uma outra forma com const:
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)