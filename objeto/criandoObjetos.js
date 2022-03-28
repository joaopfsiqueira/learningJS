//formas diferentes de se criar objetos.

//Notação Literal: Abre e fecha colchetes
const obj1 = { }
console.log(obj1)


//Object em JS
console.log(typeof Object, typeof new Object())
const obj2 = new Object
console.log(obj2)



//funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => { //método que pertence à instância criada
        return preco * (1 - desconto)
    }
}
const p1 = new Produto ('Caneta', 7.00, 0.15)
const p2 = new Produto ('Notebook', 3000, 0.20)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


//Função Factory
function criarFuncionario (nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){ //irá calcular o salário mediante às faltas.
            return(salarioBase / 30) *(30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 1200, 4)
const f2 = criarFuncionario('Maria', 10000, 6)
const f3 = criarFuncionario('Gabriel', 1800, 1)
console.log(f1.getSalario(),f2.getSalario(),f3.getSalario())



//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//Um função que retorna objeto, JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)