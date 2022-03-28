//o array em js é um objeto especial, mas não é um tipo nativo de array, o tipo de dados ARRAY.
//Só que ao invés de listar por identificadores, ele organiza por lista.

//curiosidade:
console.log(typeof Array, typeof new Array, typeof [])

//Forma de criar um array(EXISTE DIVERSAS FORMA)
let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//Outra forma
aprovados = ['Bia', 'Carlos', 'Ana']
//todo array tem indice, cada , é um elemento ao lado e todo elemento tem seu número.
//0 = primeiro, 1 = segundo, 2 = terceiro e por assim vai.
//quando chamamos a variavel[numero do indice], vamos retornar uma consulta especifica.
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])


//UMA FORMA DE SE ADICIONAR UM NOVO ELEMENTO EM UM ARRAY.
aprovados [3] = 'Paulo'
console.log(aprovados[3])

//uma outra forma, mais apropriada, de se adicionar um elemento.
//.push()
aprovados.push('Abia')
console.log(aprovados.length) //veremos o tamanho do array
//Perceba que tem 5 elementos, bia, carlos, ana, paulo e abia.

//Só temos 5 NOMES, 5 indices. Mas e se pularmos para o indice 10 e adicionar um, pulando, 5 6 7 8
//Ele vai ser adicionado na posição informada, só que todos os outros indices que não tem um "valor"
//retornaram undefined.
aprovados[9]= 'Rafael'
console.log(aprovados.length)
console.log(aprovados[5])
//Então, estão todos ali, só que indefinido. Demonstrando:
console.log(aprovados)

aprovados.sort()//essa função vai causar uma alteração dentro do array, ordenando o mesmo por alfabeto.
console.log(aprovados)


//formas de se excluir um elemento do array.
delete aprovados[1]
console.log(aprovados[1])
//se tornando undefined, porém, a ordem do array segue a mesma, sem alterações.
console.log(aprovados[2])


//Splice serve para adicionar elementos em um indice
//como também serve para remover, ou adicionar e remover ao mesmo tempo
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') //o primeiro elemento é qual numero do array você quer alterar, "carlos"
//O SEGUNDO É A QUANTIDADE DE DELETES, 1 SÓ VAI REMOVER O PROPRIO.
//O TERCEIRO EM DIANTE É O QUE VAI ADICIONAR.
console.log(aprovados)

// caso não queira excluir algo, bastaria substituir o segundo número por 0.
aprovados = ['João', 'Pedro', 'Siqueira']
aprovados.splice(1, 0, 'Elemento 1', 'Elemento2')
console.log(aprovados)
//o que ocorreu é que foi adicionados 2 elementos.