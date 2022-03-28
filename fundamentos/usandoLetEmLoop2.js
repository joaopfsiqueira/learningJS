const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
//pelo fato de ter LET e nesse caso, o funcs vai apontar de forma certa:
//diferente do exemplo do var.
funcs[2] ()
funcs[6] ()
funcs[8] ()