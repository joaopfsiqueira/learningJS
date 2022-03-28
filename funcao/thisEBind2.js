function Pessoa() {
    this.idade = 0
    /*setInterval é uma função que dispara outra função à partir do intervalo
    informado    */
    setInterval(function(){
        this.idade++
        console.log(this.idade + " this")
    }.bind(this), 3000) //Intervalo sempre passado em milisegundos
}
//Instânciando a função
new Pessoa 



//Um outro jeito de se fazer isso usando o self:
function Pessoas(){
    this.idades = 0 

    const self = this
    setInterval(function(){
        self.idades++
        console.log(self.idades + " self")
    }, 1000)

}

new Pessoas