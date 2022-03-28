//Esta linha de código serve para saber o que fazer quando formos lidar com erros.

/* try é um bloco de código, onde dentro do mesmo tal coisa que pode ser gerada um erro.
e nesse bloco try você vai colocar um tipo catch, onde assim que gerar uma excessão.
onde, se cair no erro, vai acontecer o que estiver no catch (uma função de tratamento)
*/


//no código abaixo vamos criar uma função para gerar a mensagem de erro.
//Throw new
function tratarErroELancar (erro){
    throw new Error ('...')
    //formas de throw:
    // throw 10
    // throw true
    //throw 'Mensagem'
    /* throw {
        nome: erro.name,
        msg: erro.message,
        data: new date
    }
    */
}

//NO EXEMPLO ABAIXO CRIAMOS UMA FUNÇÃO QUE TRAS UM OBJ
//vai pegar o obj.nome e utilizar o UpperCase(CAIXA ALTA)


function imprimirNomeGritado (obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally { //finally é um comando de erro também, ele serve para exercer uma função
            //caso o try tenha tido sucesso ou não, sempre será executado.
        console.log('final')
    }
}

//Chamando a função 
//para realizar o teste com o erro, só trocar o name por nome
const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)


