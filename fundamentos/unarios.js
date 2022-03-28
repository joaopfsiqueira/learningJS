//DUAS FORMAS, PRÉ-FIXADA E PÓS FIXADA.
let num1 = 1
let num2 = 2


//forma pós fixada.
//a formula abaixo aumenta o valor do nume1
num1++
console.log(num1)

//forma pré fixada, subtraindo a soma anterior.
--num1 //o -- subtrai o numero atual em 1.
console.log(num1)

//NUMERO ++NUMERO1 ESTRITAMENTE IGUAL AO NUM2 --
console.log(++num1 === num2--)
//por que a comparação acima de true? Bom, a operação de ++ do numero1 foi executada
//antes da comparação estrita, e só depois dessa comparação que foi subtrair o numero2.
//logo, até o fim da comparação, o numero 2 era igual a 2.
//ISSO PQ O -- ESTÁ NO FIM DA OPERAÇÃO, SE ESTIVESSE NA FRENTE, SERIA DIFERENTE.
//TANTO QUE SE FORMOS VERIFICAR AGORA, SÃO DIFERENTES.
console.log(num1 === num2)

//HÁ UMA NECESSIDADE DE ORDEM NOS CÓDIGOS.
//POUCOS COMENTÁRIOS
//ORDEM CORRETA.
//PREZE PELO CÓDIGO "LIMPO"