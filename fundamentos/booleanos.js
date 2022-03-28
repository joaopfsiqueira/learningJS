//Todo tipo boolean é True and False.
//is Ativo é literal.
let isAtivo = false
console.log (isAtivo)

isAtivo = true
console.log(isAtivo)

//Em JavaScript é possível usar um number para transmitir um booleano.
//Usando o !, quando usado uma vez antes da variavel ele retorna false
//quando usado 2 vezes o !! retorna um true.
isAtivo = 1
console.log (!!isAtivo)
console.log (!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)


//Para trazer um nome desconhecido quando a variável for nula.
let nome = ''
console.log(nome || 'Desconhecido')