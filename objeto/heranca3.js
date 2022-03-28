const pai = { nome: 'João', corCabelo: 'Castanho'}

//outro tipo de herança:
//criamos lá em cima a const pai, sendo ela o prototipo.
//agora, criando filha, usamos o código Object.create() e declaramos dentro do () qual o objeto pai
//já criando um sistema de herança.
const filho1 = Object.create(pai)
filho1.nome = 'Pedro'



//no código abaixo já podemos puxar as informações do prototipo principal.
console.log(filho1.corCabelo)



//no exemplo abaixo, já colocamos os atributos que existem no prototipo pai (nome, corCabelo)
//mas também vamos criar outros atributos para filho2 e decidir se ela pode ser alterada e listada.
const filha2 = Object.create(pai, {
    nome: { value: 'Fernanda', writable: false, enumerable: true}
})
console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)



//trazendo as chaves
console.log(Object.keys(filho1))
console.log(Object.keys(filha2))



//Dessa forma é possível listar todas as keys que tem dentro da const Filha2.
for(let key in filha2){
    console.log(key)
}



//da forma abaixo, com o código hasOwnProperty, é uma pergunta ao código, se a mesma tem uma
//propriedade própria. Uma chave própria.
//e caso tenha uma por herança, existe outro console log trazendo isso.
for(let key in filha2){
    filha2.hasOwnProperty(key)?
    console.log(key) : console.log(`Por herança: ${key}`)
}