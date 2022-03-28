//Do while é uma variante do while. Garante que ao menos uma vez vai ser utilizado
//o laço do while
function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


let opcao = -1
//no do while, o while fica fora da expressão. Sendo que só vai ser utilizado depois do DO
//Como eu disse no inicio, o do garente que ao menos uma vez vai ser utilizado o código.
//nesse caso, mesmo que a expressão seja a mesma do numero que tem que ser diferente,
//ele vai executar o código.
do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}.`)
}while (opcao != -1) 

console.log('Até a próxima!')


//DO WHILE NÃO É MUITO UTILIZADO.