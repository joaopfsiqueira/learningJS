function Aula (nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}
//o que acontece quando usamos o construtor "New"?
const aula1 = new Aula ('Bem vindo', 123)
const aula2 = new Aula ('Até Breve', 456)
console.log(aula1, aula2)
//Não só é criado um novo objeto, como o prototipo do novo objeto é apontado para o mesmo da função.
//Sendo um tipo de herança.


//Simulando o new
//criar função e parametros.
function novo(f, ...params){
    const obj = {} //criando objeto novo
    obj.__proto__ = f.protype //associou o prototipo do obj com a função criada
    f.apply(obj, params) //vai executar a função F
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 122)
const aula4 = novo(Aula, 'Até logo', 112)
console.log(aula3, aula4)
//vai trazer o mesmo resultado.