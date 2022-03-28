//callback quer dizer de chamar de volta.
//Em uma função com indice:
//a ideia de callback é passar uma função para outra função
//e quando determinado evento acontecer, a função será chamada de volta.
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
//forEach é uma função de array.
//forEach vai passar para a função o nome do elemento e o indice do elemento que ele
//percorre
fabricantes.forEach(imprimir)
//Explicando.
//para cada elemento dentro do array ele vai passar o código de volta.
//por isso, callback.


//podemos criar uma function dentro também.
fabricantes.forEach(function(fabricante){
    console.log(fabricante) //mas quem é o valor de fabricante nessa function?
    //Será exatamente cada um dos elementos do array.
})

//Podendo também ser criado em um arrow
fabricantes.forEach(fabricante => console.log(fabricanten))

//Nesses casos, o evento citado no inicio é o loop.
//sempre que um elemento novo surgir ele chama o callback.