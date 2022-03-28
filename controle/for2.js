//FOR IN É UMA FORMA DE NÃO SE CONTROLAR TANTO A VARIÁVEL I
//E AINDA SIM VAI RECEBE-LA COMO PARÂMETRO.
//ARRAY É BASE DE FOR IN, só é possivel usar com array

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

//Dessa forma utilizamos o in
for (i in notas) {
    console.log(i, notas[i])
}

//Podemos fazer com atributos também.
const pessoa = {
    nome: 'João',
    sobrenome: 'Siqueira',
    idade: 18
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
