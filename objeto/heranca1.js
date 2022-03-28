//PRIORIZE SEMPRE COMPOSIÇÃO DO QUE HERANÇA.
//Herança consiste basicamente em reutilização de chaves ou valores.

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//COM ESSA FUNÇÃO __proto__ (2 underline)
//eu consigo acessar quem é o protótipo desse objeto, o super objeto, projeto pai.
//o que quer dizer que, se eu procurar um atributo por ferrari e não encontrar
//ele vai procurar no projeto pai, encontrando ele retorna o valor que achou.
//Caso não ache, ele vai seguir procurando até achar em qualquer elemento.
console.log(ferrari.__proto__) 

//no caso ele retorna vazio, mas está presente.
console.log(ferrari.__proto__ === Object.prototype) //3 igual.

//Retornando um valor verdadeiro.
console.log(volvo.__proto__ === Object.prototype)

//object prototype tem um prototipo? Não. Ele é o mais alto nivel.
console.log(Object.prototype.__proto__)

//testando
function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)