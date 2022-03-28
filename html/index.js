function imc(altura, peso) {
    return peso / (altura * altura)
}


var pessoas = [
    {
        nome: 'João',
        altura: 1.83,
        peso: 74
    },

    {
        nome: 'Maria',
        altura: 1.90,
        peso: 90,
    },

    {
        nome: 'Pedro',
        altura: 1.70,
        peso: 60,
    }


]

for (var pessoa of pessoas){
    var resultado = imc(pessoa.altura, pessoa.peso)

    console.log(pessoa.nome, resultado)
}