//Melhorias nas literais em JS.
const a = 1
const b = 2
const c = 3

//Antes precisava:
const obj1 = { a: a, b: c, c:c}
//hoje em dia:
const obj2 = {a, b, c}

console.log(obj1, obj2)


//outra melhoria, quando queremos criar dinamicamente um atribudo com objeto usando uma string.
const nomeAttr = 'Nota'
const valorAttr = 7.87

const obj3 = {}
    obj3[nomeAttr] = valorAttr
    console.log(obj3)


//Na nova:
const obj4 = {[nomeAttr]: valorAttr}    
console.log(obj4)


//UMA MUDANÇA DE COMO DEFINIR FUNÇÕES DENTRO DE OBJETOS LITERAIS.
const obj5 = {
    funcao1: function(){
        //qualquer coisa
    },////nova forma do ES6:
    funcao2(){

    }
}

console.log(obj5)

