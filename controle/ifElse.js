//Ao criar uma constante que recebe uma função que recebe uma nota, podemos 
//utilizar um if dentro da mesma.
const imprimirResultado = function(nota){
    if (nota >= 7) {
        console.log('Aprovado!')
    }else { //O comando else é um comando de resposta FALSE.
            //se o que o if está pedindo for FALSE, ele vai retornar o else.
        console.log('Reprovado! :( ')
    }
}

imprimirResultado(10)
imprimirResultado(6)
//pelo fato de JS ser uma linguagem fracamente tipada, podemos passar uma string.
//Logo, o sistema vai considerar essa string menor que o valor, visto que ele
//não se encontra depois do 7, retornando um reprovado.
imprimirResultado('Epa!') //ter cuidado com esse tipo de problema.

