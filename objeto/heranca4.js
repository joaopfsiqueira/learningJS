function MeuObjeto(){
}
console.log(MeuObjeto.prototype) //Retornando que o atributo existe

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

/*No código abaixo é provado que,
todos os objetos criados dentro de um e tido como criados dentro de uma função possuem o mesmo
prototipo que o outro.
*/
console.log(obj1.__proto__ === obj2.__proto__)
//provando:
console.log(MeuObjeto.prototype === obj1.__proto__)
console.log(MeuObjeto.prototype === obj2.__proto__)


//Podemos criar atributos mesmo fora da function.
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function (){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()
obj2.nome = 'João'
obj2.falar()

const obj3 = {}
obj3.__proto__=MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()


//Resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)