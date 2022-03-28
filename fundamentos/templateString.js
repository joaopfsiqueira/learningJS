//é possível concatenar uma string em uma variavel, usando o +
const nome = 'Fernanda'
const concatenacao = 'Olá ' + nome + '!'

//Crase da pra se utilizar afim de dividir variável em + de 1 linha.
// $ É um template String.
//o $ interpola(interpreta) o texto, trazendo o certo(uma variável). Sempre no inicio.
const template = `
    Olá
    ${nome}!
`
console.log(concatenacao, template)

//expressões com o crase e dólar. A expressão só vai funcionar com o Dólar, sem ela, não obtem reusltado.
console.log(`1 + 1 = ${1 + 1}`)

//Uma função para colocar tal string em letra maiscula, usando o console.
//UP é uma função. E pode ser utilizida em lugar de variável.
const up = texto => texto.toUpperCase() 
console.log(`Ei... ${up('cuidado')}!`)