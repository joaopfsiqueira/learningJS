//IIFE → Immediately invoked function expression

/* 
Uma função invocada que é mais utilizada no browser, quando você quer fugir do escopo global.
Buscando o escopo local.
Evitando você de manipular no escopo global.

Importante pois, se tem algo compartilhado no global, todos os usuários podem utilizar aquelas informações
Gerando bug no código em qualquer alteração.
*/

(function () {
    console.log('Será exutado na hora!')
    console.log('Foge do escopo mais abrangente!')
})() //esse parenteses ao lado invoca a função.