function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // || é o simbolo do "ou"
    const comprarTv50 = trabalho1 && trabalho2 // && significa "e"
    //o && é um operador que já verifica se o primeiro é positivo
    //se o mesmo não for positivo ele nem verifica o segundo.
    //const comprarTv32 =  !!(trabalho1 ^ trabalho2) //OU EXCLUSIVO
    const comprarTv32 = trabalho1 != trabalho2 //OUTRO OU EXCLUSIVO, MAIS FACIL DE USAR.
    const manterSaudavel = !comprarSorvete //operador unário

    //UM OBJETO PARA RETORNAR AS FUNÇÕES.
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))