//exemplos de this.
//o this acessa o dono daquele código naquele momento.
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

//Caso o this seja removido, a equação não irá funcionar.


//armazenando dentor de uma variável:
const falar = pessoa.falar
falar()
//retornou um erro pois não existe saudacao dentro do objeto solicitado.

//BIND é uma expressão que passa um objeto a chamar o this.
//significando sempre que o THIS, será resolvido para pessoa.
//BIND, basicamente, retorna uma função entre ()
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
