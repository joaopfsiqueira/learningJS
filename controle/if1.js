//o if dentro de uma função serve para determinar algo.
//se, algo for true, outra coisa irá acontecer.

function soBoaNoticia(nota){
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

//executar o código com um valor acima do solicitado para ser true dentro do if
//apenas a primeira opção vai aparecer.
soBoaNoticia(8.1)
soBoaNoticia(6)

//um outro exemplo utilizando string (o sentido não muda, visto que é true or false.)
function seForVerdade(valor){
    if(valor){
        console.log('É verdade' + valor)
    }
}

//Nos exemplos abaixo não é para retornar nada. Visto que são false.
//pois todas as opções abaixo não são nenhum valor.

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)

//nos casos abaixo o valor não é nulo, logo não é false.
seForVerdade(-1) //numero negativo
seForVerdade(' ')//espaço
seForVerdade('?')//sinal de interrogação
seForVerdade([])//uma array
seForVerdade([1, 2])//array com numeros
seForVerdade({})//vazio