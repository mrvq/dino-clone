const users = ['Guilherme', 'Pedro', 'Jeniffer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}
const persons = [
{
    name: 'Guilherme',
    age:26,
    gender: gender.MAN
},
{
    name: 'Pedro',
    age:43,
    gender: gender.MAN
},

{
    name: 'Jeniffer',
    age:18,
    gender: gender.WOMAN
},

];

//RETORNA A QUANTIDADE DE ITENS DE UM ARRAY
console.log('iTEMS: ', persons.length);

//verifica se é array 
console.log("A variavel persons é um string", Array.isArray(persons));

//Iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name} index: ${index}`, arr);
});

//filtrar Array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens', mens);

//Retorna um novo
const personWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    return person;
});

console.log('\nPessoas com a adição do course: ', personWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);
console.log('\nSoma de idade das pessoas', totalAge);

//juntando operações
const totalEventsAges = persons
                .filter(person => person.age % 2 === 0)
                .reduce((age, person) => {
                    age += person.age;
                }, 0);
console.log('\nSoma de idades das pessoas que possuem idade par', totalEventsAges);