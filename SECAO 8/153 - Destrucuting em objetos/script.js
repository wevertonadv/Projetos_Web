//Estrutura do destrucuting

const person = {
    name: 'Weverton',
    lastname: 'Mello'
}

const {name: fname, lastname: lname} = person;

console.log(fname)
console.log(lname)