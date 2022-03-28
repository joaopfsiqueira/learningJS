let contador = 1
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++ //incremento
}
//no código acima, colocamos um valor inicial de 1 no contador
//depois criamos um while que vai se repetir até o valor ser 10.
//contador ++ vai subindo um sempre.

//fazendo isso com o FOR:
//o primeiro elemento é a informação o var
//; condição para seguir
//; incremento
for(let i = 1; i <=10; i++ ) {
    console.log(`i = ${i}`)
}

//fazendo o exemplo com array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) //notas. lengh = variável notas lenght = array.//
//então o código diz que é para executar o mesmo, até o tamanho final do array
//mais especifico o ultimo numero do array.
{
    console.log(`notas = ${notas[i]}`)
    //nesse caso, colocamos o i entre colchetes dentro das chaves.
}