//Classes sempre tem construtores
//que são os atributos.
class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

//Classe com métodos
class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.Lancamentos = []
    }
    //método para fazer lancamentos 
    addLancamentos(...Lancamentos){
        Lancamentos.forEach(l => this.Lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.Lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }

}

const salario = new Lancamento('Salario', 4500) 
const contaDeLuz = new Lancamento('Luz', -220) //VALOR NEGATIVO POIS É UM VALOR DE SAIDA

const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario,contaDeLuz)

//resultado dos valores somados. 
console.log(contas.sumario())