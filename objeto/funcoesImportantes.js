const pessoa = {
    nome : 'João',
    idade: 19,
    peso: 13
}

console.log(Object.keys(pessoa))
//uma vez foi mencionado que objeto é uma coleção de chaves e valores.
//object.keys puxa todas as chaves "nome, Idade, Peso"

//Claro que também podemos puxar os valores.
console.log(Object.values(pessoa))

//é possivel pegar uma lista tanto das chaves quanto dos valores.
console.log(Object.entries(pessoa))

//Ou então:
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

//Para definir uma propriedade de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {//criando uma nova chave.
    enumerable: true, //habilitar para a mesma ser enumerada. Listada.
    writable: false, //Pode ser alterada?
    value: '04/05/2000' //valor da mesma
})

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))//mostrando que foi listada a propriedade.


//Object.assing (ECMASCript 2015)
const dest = {a:1}
const o1 = {b: 2}
const o2 = {c: 3, a:4}
const obj = Object.assign(dest, o1, o2) //ele vai concatenar os objetos no primeiro parametro.

Object.freeze(obj)
obj.c = 1234
console.log(obj)