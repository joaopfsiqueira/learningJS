console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//Todos são atributos, e todos tem prototype, logo, são funções.

//
String.prototype.reverse = function () {
    return this.split('').reverse().join('') //para inverter as letras da string
}

console.log('Escola Cod3r'.reverse())


//Fazendo com um array.
Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first()) //pegando só o primeiro elemento do array [0]
console.log(['a', 'b', 'c'].first())


//Podemos substituir uma função que já existe no prototipo da string (NÃO FAZER)
String.prototype.toString = function () {
    return 'Lascou Tudo'
}

console.log('Escola Cod3r'.reverse())