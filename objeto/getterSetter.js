const sequencia = {
    _valor: 1, //convenção = _, serve para mostrar para o programador que é pra acessar só dentro da mesma.
    //criando uma função get, para acessar um valor dentro de uma função.
    //validar algo, etc.
    get valor() { return this._valor++}, 

        //criando um valor set, para inserir algo, setar.
        set valor(valor) {
             if(valor > this._valor){ //você não consegue voltar a sequencia, apenas ir para a frente
        this._valor = valor}

        }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // não vai poder voltar a sequencia, então, vai seguir a mesma.
console.log(sequencia.valor, sequencia.valor)