const user = {
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'
};

//Recupera as chaves do objeto 
//console.log('Propriedades do objeto user: ', Object.keys(user));

//Recupera os valores das chaves dos onjetos
//console.log('\nValores das propriedades do objeto user: ', Object.values(user));

//Retorna um array de array contendo [nome_prop, valor_prop]
//console.log('\nLista de propriedades e valores: ', Object.entries(user));

//Mergear propriedades dos objetos
Object.assign(user, {fullname: 'Guilherme Cabrini da Silva'});

console.log('\nAdiciona a propriedade fullname no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26}));

//Previne todas as alterações em um objeto 
const newObj = { foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
//delete newObj.foo;

console.log('\nVariavel newObj após as alterações', newObj);

//Permite apenas a alteração de propriedade existentes em um obbjeto
const person = { name: 'Guilherme'};
Object.seal(person);

person.name = 'Guilherme Cabrini';
delete person.name;
person.age = 26;

console.log('\nVariavel person aops as alterações', person);
