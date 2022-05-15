// String, Numbers, Boolean, null, undefined
const name = "Koray";
const age = 30;
const isCool = true;
const kek = null;
const kekw = undefined
let keek; //also undefined

// concatenation 
console.log('Hey, my name is ' + name + " and I'm " + age);


// Template String es6
const hello = `My name is ${name} and I am ${age}`;

console.log(hello)


// Console log commands
const s = 'Hello World!';

console.log(s.length, s.toUpperCase(), s.toLowerCase(), s.substring(0, 5).toUpperCase())

const y = 'technology, computers, IT, code';

console.log(y.split(`, `))


// Arrays - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries'); //adds to start of array

// fruits.pop() - Kicks last entry in arrays 'mangos'

console.log(fruits);
console.log(fruits[2]);

//Object Literals
const person = {
    firstName: 'Burkay',
    lastName: 'Polat',
    age: 22,
    hobbies: ['gaming', 'code', 'weightlifting'],
    address: {
        street: '50 main st',
        city: 'London',
        postcode: 'N22 4EP',
    }
}

person.email = 'burkayatgmail.com';

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);
console.log(person.email)


const todos = [{
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos[1].text)

const todoJSON = JSON.stringify(todos);
console.log(todoJSON); //JSON string to server

// For Loops
for (let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`); //template string method
}

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text); //not best way
}

for (let todo of todos) {
    console.log(todo.text); //better way 
}

// While Loops
let i = 5;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

//Higher order array methoods forEach, map, filter
todos.forEach(function (todo) {
    console.log(todo.text)
});

const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText)

const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
})
console.log(todoCompleted)

//conditionals if statements 

const g = 9;
const j = 18;
if (g > 5 || j > 10) { //always use triple =, double doesn't take into account type of data
    console.log('g is more than 5 and j is more than 10')
};
//     } else if (g > 10) {
//     console.log('g is greater than 10')
// } else {
//     console.log('g is less than 10');
// }

//ternary operator - used to assign variables based on a condition
const k = 10;
const color = k > 10 ? 'red' : 'blue';
console.log(color);

//switches - another way to evaluate conditions
const m = 11;
const colorr = m > 10 ? 'red' : 'blue';
switch (colorr) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

//Functions and arrow - don't need curly braces or return function with arrow
const addNums = (num1 = 1, num2 = 1) => num1 + num2;
const addNums2 = num1 => num1 + 5;

console.log(addNums( /*5, 5*/ ));
console.log(addNums2(5));

//Constructor function - use capitals for function name
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Supposed to hide function and hide under prototype for syntactic sugaring on console log but didn't work
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

//instantiate object
const person1 = new Person('Koray', 'Polat', '22-07-1994');
const person2 = new Person('Burkay', 'Polat', '25-10-1000');
const person3 = new Person('Sehri', 'Polat', '25-09-1978');
console.log(person1);
console.log(person1.getFullName());


//Random integer generator 
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

var ranNums = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]);

console.log(ranNums)