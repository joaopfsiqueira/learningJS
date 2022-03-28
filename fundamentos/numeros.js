//Meios de receber numeral em variáveis:
const peso1 = 1.0
const peso2 = Number('2.1')

console.log (peso1, peso2)

//E se eu quiser saber se o peso1 é inteiro? True
console.log (Number.isInteger(peso1))

//O mesmo para o peso2: False
console.log (Number.isInteger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.871

//Realizando operações
const total = avaliacao1 * peso1 + avaliacao2 * peso2

//Localizando uma média de nota
const media = total / (peso1 * peso2)


console.log(media)
//E se eu quiser um limite de casas decimais no numero? 
console.log(media.toFixed(2))

//E se eu quiser converter para string? 
console.log(media.toString(2)) //Utilizando binário

//saber o tipo da variavel?
console.log (typeof media)