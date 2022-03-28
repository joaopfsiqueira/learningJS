//Notação ponto serve para acessar determinadas funções.
//exe: .log

//Math é um objeto, referente à matematica.
//Ceil é uma notação ponto, que arredonda os números para cima.
//floor arredonda para baixo.
console.log(Math.ceil(6.1))
console.log(Math.floor(6.1))


//Para criar um atributo dentro de um objeto podemos utilizar da notação ponto.
//mesmo que o atibuto não esteja dentro do objeto, podemos criar com a mesma fora das chaves.
const obj1 = {}
obj1.nome = 'Bola'
//obj1['Nome'] = 'Campo' //Este é um outro metodo de se chamar um atributo em um objeto
console.log(obj1.nome)


//o this significa = o nome associado a esse objeto à partir dessa função.
//em outras palavras, o objeto vai se tornar público.
//this. também consegue criar funções, de forma publica.
function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Teste')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj ('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()