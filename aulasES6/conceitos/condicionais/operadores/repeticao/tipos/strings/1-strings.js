//Retorna o tamanho da string
const textSize = 'Texto'.length;
console.log('Quantidade de letras: ${textSize}');

//Retorna um arrau quebrando a string por um delimitador
const sllitedText = 'Texto'.split('x');
console.log('\nArray com posições separadas pelo delimitador: ', sllitedText);

//busca por um valor e substitui pelo outro
const replaceText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor:', replaceText);

//Retorna a "fatia de um valor"
const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra da string', lastChar);

const allWithowLasttChar = 'Texto'.slice(0,-1);
console.log('\nValor da strinf da primeira letra menos a ultima', allWithowLasttChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a ultima', secondToEnd);

//Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirtsPos = 'Texto'.substr(0,2);
console.log('\nAs duas primeiras letras são', twoCharsBeforeFirtsPos);

