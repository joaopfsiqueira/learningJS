const valor = 'Global'

function minhaFuncao (){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

//no código acima, qual o valor a ser executado é o 'Local', visto que é a primeira vez que foi declaro.
//O contexto léxico dele é global, logo, é aquela variável em todo o código.