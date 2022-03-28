//UTILIZAREMOS DESTRUCTURING QUANDO O MIN FOR MAIOR Q O MAX
function rand([ min = 0, max = 1000]) {
    if (min > max) [min,max]  = [max, min] //quando um min recebe um valor maior que o max ---
    //precisamos inverter os mesmos, o if acima diz isso.
    const valor = Math.random() * (max-min) + min //código para trazer um valor qualquer.
    return Math.floor(valor) //Código para arredondar o valor para baixo.
} 

//estamos passando um valor, e não estamos especificando os atributos (min or max)
console.log(rand([50,40]))

//podemos só inserir um único valor, pela ordem, o mesmo será min.
console.log(rand([500]))

//podemos passar também apenas o segundo número, passando o primeiro valor como vazio.
console.log(rand([,60]))

//podemos então não passar NENHUM valor dentro do objeto. Fazendo o mesmo utilizar os valores padrões (0 - 1000)
console.log(rand([]))

//podemos utilizar o vazio, resultando um erro.
console.log(rand())