//DESTRUCTURING DENTRO DE UMA FUNÇÃO
//tudo envolvido entre chaves, dizendo que vai passar um objeto para uma função.
//sem necessário utilizar a notação ponto para criar o objeto.
//utilizaremos a função matemática Math.random.
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//console.log + a função estabelecendo um máximo de valor retornavel.
console.log(rand({max: 50, min:40}))

//uma outra forma é informando apenas o valor minimo, já que o valor máximo padrão é 1000.
console.log(rand({min: 1}))

//ou então sem informar nada, trazendo um objeto vazio, já que temos um padrão.
console.log(rand({}))

//NÃO PODEMOS DEIXAR SEM OBJETO, CASO CONTRÁRIO VAI GERAR UM ERRO:
console.log(rand())