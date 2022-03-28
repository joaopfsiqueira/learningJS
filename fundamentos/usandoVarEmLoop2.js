//nesse exemplo utilizaremos array: []
const funcs = []

//pegando uma função vazia.
for (var i = 0; i < 20; i++){
    funcs.push(function(){
        console.log(i)
    })
}
//Nesse momento o resutlado será o mesmo que o de dentro do FOR.
//visto que o escopo está sendo respeitado dentro da variável.
funcs[2]()
funcs[8]()



