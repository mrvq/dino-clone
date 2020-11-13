const myNumber = 12.4032;

//Transformar numero para String
const numberAssString = myNumber.toString();
console.log('\nNumero transformado em String ', typeof numberAssString);

//Retornar numero com um numero de casas Decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNumero com 2 casas decimais ', fixedTwoDecimals);

//Transformando uma string em float
console.log('\nString parseada para Float ', parseFloat('13.22'));

//Transforma uma String em em int
console.log('\nString parseada para int ', parseInt('13.20'));


