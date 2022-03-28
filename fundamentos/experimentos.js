let a = 3


global.b = 123


this.c = 456
this.d = false
this.e = 'Teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports ===this)
//vai trazer todas as variáveis this que estão no global.
console.log(module.exports)

//criando uma variavel maluco: sem var e let!
abc = 3 //não faça isso em casa!
console.log(global.abc)

//module.exports = { e: 456, f: false, g: 'teste'}

//fuja do escopo global.