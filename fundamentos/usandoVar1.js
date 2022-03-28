{
     {
          {
               { var sera = 'Será??' } 
               console.log(sera)
          } 
     } 
}

console.log(sera)

//Uma variável definida por var só tem 2 escopos possíveis.
//Ou ele é nivel global, visivel na aplicação inteira
//Ou ele é nivel do bloco, sendo acessada apenas dentro dela mesmo.(dentro de funcition.)


//quando definimos uma variável da seguinte forma, percebemos que sem colocar um console dentro do bloco
//nós não conseguimos chamar a mesma.
//Por que isso acontece? Porque quando definimos uma var dentro de uma function
//seu escopo só abrange o bloco, fora dele não funciona.
function teste () {
    var local = 1031
    console.log(local)
}
//console.log(local)
teste()
