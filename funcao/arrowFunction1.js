//Arrow serve para economizar linhas. Arrow = > 
//veja diferença entre os códigos 1 e 2.
let dobro = function(a){
    return 2 * a
}


dobro = (a) => {
    return 2 * a
} 


//ainda mais reduzido, utilizado em apenas uma função.
//return explicito
dobro = a => 2 * a
console.log(dobro(Math.PI)) //Dobro do PI. 



let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'

//Podemos usar um underline ao invés do ()

//porém underline é um parametro, mas não afeta no resultado, podendo
//ignorar o parametro
ola = _ => 'Olá'

console.log(ola())