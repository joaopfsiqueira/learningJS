//Diferente de Var, o let tem apenas um escopo no qual o mesmo se encontra.
//trazendo o let = 1 e o let igual a 2.
//se fosse var no local no let ia retornar apenas = 2.


let numero = 1
{
    let numero = 2
    console.log('Dentro= ', numero)
}
console.log('Fora=', numero)