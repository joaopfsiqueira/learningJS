//For => repetição
//Todo for tem uma variável
//a condição para que siga funcionando
//e um incremento (TODA VEZ QUE O I FOR ACIONADO VAI AUMENTAR UM VALOR.)
//quando o valor for atingido, o código será interrompido.
for (var i = 0; i < 10; i++){
    console.log(i)
}

//podemos seguir chamando o var, por conta de seu escopo global, mas o valor é o seguinte:
console.log('i =', i)
//retornando o valor que o fez sair do FOR, logo, 10.