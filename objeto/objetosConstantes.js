// pessoa -> 123 -> {...}
//o código acima explica que a const pessoa aponta para um endereço de memoria., ex: 123.
//e esse endereço aponta pra o objeto presente no endereço de memoria.
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'   //Quando eu aponto para outro objeto, a constante pessoa segue no endereço.
//porém, o objeto tem seu endereço alterado.
console.log(pessoa)//com isso, vc percebe que o pessoa vai se alterar.


//pessoa <- recebe um novo objeto <- cujo endereço é diferente, 456 como exemplo.
//tentando fazer a variável apontar para o novo endereço, da pessoa ana.
//pessoa = { nome:'Ana'}

//gerando um problema, pois não é possivel atribuir um novo objeto para pessoa, pois é uma constante.



//o método abaixo serve para congelar um objeto
//tornando impossível de se mexer no objeto.
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)
//no código acima era para retornar maria, porém, como congelamos o objeto atual na linha 20
//e o objeto era pedro, logo, ele se manteve.


//Podemos freezar quantos quisermos.
const pessoaConstante = Object.freeze({ nome: 'João'})
console.log(pessoaConstante)