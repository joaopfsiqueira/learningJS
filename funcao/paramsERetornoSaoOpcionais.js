//Parametros e retornos são opcionais. Podendo ou não ser chamado.

//O Exemplo abaixo não é recomendado se utilizar
function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    } else{
        return area //sem chamado
    }
}

//Colocando valores
console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,7,10))// pasando mais valores que existe só os dois primeiros
//são calculados, visto que só tem 2 valores no maximo.
console.log(area(5,5))
