// Retorna o tamanho de uma string 
const TextSize = "Texto".length;
console.log(`Quantidade de letras: ${TextSize}`);

// Retornar um Array quebrando a string por um limitador
const splittedText = "Texto".split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

// Busca por uma valor e substitui por outro
const ReplacedText = "texto".replace('text', 'txet');
console.log('\nSubstituição de Valor: ', ReplacedText);


// Retorna a "fatia" de um valor
const CastChar = "Text".slice(-1);
console.log('\nUltima letra de uma string: ',CastChar);

const allWithOutLastChar = "Texto".slice(0, -1);
console.log('\nValor da string da primeira letra menos a ultima: ', allWithOutLastChar);

const secondtoEnd = "Texto".slice(1);
console.log('\nValor da string da segunda letra até a ultima: ', secondtoEnd);

//Retorna N caracteres a partir de uma posição
const twoCharBeforeFirstPos = "Texto".substr(0,2);
console.log('\nAs duas letras primeiras são: ', twoCharBeforeFirstPos);
