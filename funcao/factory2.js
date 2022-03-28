function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 10
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))
console.log(criarProduto('S10', 4500,00))