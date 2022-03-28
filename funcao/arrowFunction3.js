//Como funciona o this dentro de uma arrow function.
let comparaComThis = function (param) {
    console.log( this === param)
}
comparaComThis(global)
//This é um objeto global, sendo um objeto window.

//Testando com BIND, apontando para obj ao invés do global (this)
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //Não é mais global
comparaComThis(obj) //Aponta para obj

//outra forma de se fazer isso, ARROW
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
//quando fazemos de forma resumida com arrow, a mesma não aponta para o global
//retortando um false.
//Dentro de um arrow, o this aponta para o obj dentro do escopo da mesma.
//Porém, ele é um module.exports.
comparaComThisArrow(module.exports)

//usando o bind dentro de uma função arrow:
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
//Ele não vai apontar para o objeto que tentamos apontar para o this, no caso acima.
//Com module vai funcionar.
comparaComThisArrow(module.exports)