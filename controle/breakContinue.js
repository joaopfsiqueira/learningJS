//Criamos um array de 1 até 10
const nums = [1,2,3,4,5,6,7,8,9,10]

//X significa o array, in é utilizado em arrays.
for (x in nums) {
    if (x==5) { 
        break
    }
    //` diz que vai juntar as opções
    // $ diz que vai adicionar tal informação ao resultado
    //${nums[x]} = o array
    console.log(`${x} = ${nums[x]}`)
}

//quando chegou à 5 ele parou.


//continue tem a mesma função de break, porém, ele continua o código.
//resumindo:
//ele parou no indice 5, que foi o solicitado.
//porém, ele observou que tinha mais informações, então, continuou, indo até
//o indice 10
for (y in nums) {
    if(y==5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//RÓTULO
//Criamos um rótulo chamado externo, e atribuimos nele 2 for.
//um interno e um externo
//NÃO USAR O CÓDIGO ABAIXO, SÓ A TITULO DE APRENDIZADO.
externo: for(a in nums){
    for (b in nums) {
        if(a == 2 && b == 3) break //break está agindo dentro do interno
        //se caso queira usar no externo, é só colocar o break apontado no rótulo
        //break externo
        console.log(`Par = ${a},${b}`)
    }
}