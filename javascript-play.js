
// We didn't use var because is outdated.
// for variable values that aren't expected to change we use const
const name = 'Carlos Rodriguez';
let age = 42;
let hasHobbies = true;

/*
 * we could have used the variables directly, but by having parameters in the function we separate them and limit their
 * scope to the function.
 */
const summarizeUserArrowFunction = (userName, userAge, userHasHobbies) => {
    return (
        'userName is: ' +
        userName +
        ' userAge is: ' +
        userAge +
        ' user has hobbies? '
        + userHasHobbies
    );
};

// Arrow function with 2 parameters
const add = (a, b) => 'Result is: ' + (a + b);

// Arrow function with one parameter
const addOne = a => a + 1;

// Arrow function with no parameters
const displayTen = () => 9 + 1;


console.log(summarizeUserArrowFunction(name, age, hasHobbies));
console.log(add(5,7));
console.log('Calling function addOne, result: ' + addOne(7));
console.log('Calling function displayTen, result should be 10: ' + displayTen());

const person = {
    name: 'Carlos Rodriguez',
    age: 42,
    hobbies: 'play guitar, play videogames, read, learn new stuff.',
    sayHi: () => { console.log('Saying hello from within Person object!') }
};

console.log(person);

person.sayHi();


// Definining an array
const hobbiesArray = ['videogames', 'guitar', 'books'];

console.log('These are my hobbies: ' + hobbiesArray);


// Iterating over the array
for (let hobby of hobbiesArray) {
    console.log('Hobby: ' + hobby);
}

// Playing with different array methods.

// Convert an array to a map
console.log(hobbiesArray.map( hobby => hobby));


// Copying an array by using the slice() method
const copiedHobbies = hobbiesArray.slice();
console.log('Copied hobbies array is:');
console.log(copiedHobbies);


// Copying an array by inserting an array inside brackets
const copiedArrayInBrackets = [hobbiesArray];
console.log('Copied array by inserting inside brackets is:');
console.log(copiedArrayInBrackets);
console.log('Wrong!! This is an array inside another array.');

// Copying an array by using the Spread operator
const copiedArrayThroughSpreadOperator = [...hobbiesArray];
console.log('Copied array by using the spread operator:');
console.log(copiedArrayThroughSpreadOperator);

// Copying a person through the spread operator
const copiedPerson = {...person};
console.log('Copied person through the spread operator is:');
console.log(copiedPerson);


// Creating a function that supports an indefinite number os parameters through the Rest operator
const printNumbers = (...nums) => {
    return nums;
}

console.log('Printing numbers from 1 to 5 by using rest operator: ');
console.log(printNumbers(1, 2, 3, 4, 5));


// Playing with object destructure

const ff3 = {
    gameName: 'Final Fantasy III',
    copies: 31500,
    releaseDate: '01/15/1994',
    creator: 'Hirobu Yamaguchi'
};

const printGameName = ({ gameName }) => {
    console.log(gameName);
}

printGameName(ff3);

// Destructuring an object into an anonymous object

const {gameName, copies} = ff3;
console.log(gameName, copies);

// Destructuring an array into an anonymous object
const toysArray = ['bat', 'baseball', 'helmet'];
const [item1] = toysArray;
console.log(item1);


// Setting a timer through timeout()

setTimeout(() => {
  console.log('Time is up!');
}, 1);
console.log('Hello right after timeout');
console.log('Hello again, but now right after saying hello after the timeoue');
