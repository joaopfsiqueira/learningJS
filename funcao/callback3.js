//exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O Evento ocorreu!')
}
//document é um código do browser, para poder acessar o documento do seu site.
//Buscando um elente pelo tagname
//Atribuimos no "OnClick" uma callback sempre que clicar no body




const fabricantes = ["Merdedes", "Audi", "BMW"]

function imprimir (nome,indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricante))//registrando a função.
