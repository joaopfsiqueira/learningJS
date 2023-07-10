//ao invés de:

let teste = false;
// let texto = '

// if (teste) {
//   texto =  'teste'
// } else {
//   texto = 'não teste'
// }

//fazer:
// o que vier antes do ? tem que ser verdade o : é se não for verdade
const texto = teste ? 'teste' : 'não teste';

//o oposto
const texto2 = teste == false ? 'não teste' : 'teste';

// lembrando que é possível fazer um ternário com mais de uma condição, validamos se teste é true, depois se false e depois sobra o undefined.
const texto3 = teste ? 'teste' : teste == false ? 'não teste' : 'undefined';
