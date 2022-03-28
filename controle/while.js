//white é uma estrutura de repetição
//mais utilizada para estruturas que não tem um numero determinado de vezes em que será
//utilizada
//Melhor dizendo, é uma estrutura que enquanto for verdadeiro, vai estar funcionando.

//Código abaixo utilizado para gerar valores aleatórios.
function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//definimos um valor padrão para a variável
//se colocarmos o valor da variável no -1, não vai entrar no while.
let opcao = 0

//o código abaixo diz que tem que se repetir enquanto o código for diferente de -1.
//e quando acabar caindo um código -1, a extrutura vai parar.
while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')