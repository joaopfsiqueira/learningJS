// par nome/valor
const saudacao = 'Opa' //contexto léxico 1 => local fisico onde foi definido o nome/valor

//No exemplo abaixo, o saudacao abaixo se encontra em outro local. Não sendo o mesmo do de cima.
function exec () {
    const saudacao = 'Falaaa'  // Contexto léxico.
    return saudacao
}


//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'João Pedro',
    peso: 70,
    endereco: {
        Rua: 'Afonso Giannico',
        numero: 278,
        bairro: 'Pedregulho'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)


//Podemos sim ter um nome/valor iguais, porém, em escopos diferentes.