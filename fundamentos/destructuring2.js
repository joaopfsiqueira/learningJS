const [a] = [10]
console.log(a)

//AQUI PULAMOS ALGUNS CAMPOS COM , , E REALIZAMOS O DESTRUCTURING COM OS MESMOS USANDO O ARRAY.
const [n1, , n3, , n5, n6 = 0] = [10, 7 , 9, 8]
console.log(n1,n3,n5,n6)

//UMA ARRAY DENTRO DE UM ARRAY
const [, [, nota]] = [[, 8,8], [9,6,8]] //não vai utilizar esse código na prática
console.log(nota)