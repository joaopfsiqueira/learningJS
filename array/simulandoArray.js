//através de um objeto é possível ter quase o mesmo resultado do array.
const quaseArray = {0: 'João', 1: 'Pedro', 2: 'Siqueira'} //isso é um objeto, não um array.
console.log(quaseArray)

//convertendo para tostring
Object.defineProperty(quaseArray, 'toString',{
    value: function(){
        return Object.values(this)
    },
    enumerable: false,
})
console.log(quaseArray[0])


//vai obter o mesmo resultado.
const meuArray = ['Rafael', 'João', 'Siqueira']
console.log(quaseArray.toString(),meuArray)