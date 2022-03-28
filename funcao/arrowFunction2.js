//This dentro de uma arrow é um this fixo.
function Pessoa(){
    this.idade = 0

    setInterval(() => { //Arrow 
        this.idade++ //this aponta para a pessoa pq foi escrito dentro de pessoa.
        console.log(this.idade)
    }, 2000)
}

new Pessoa

//Essa é uma grande vantagem de se usar arrow
//afim de desejar que o this não varie.