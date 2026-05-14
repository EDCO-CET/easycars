console.log('Hello EDCO!');
console.log('Title:', title);
// Variables
var title = 'EASYCARS' // var is global scope - DEPRECATED
let subtitle = 'Platform for car rental' // let is block scope
subtitle = 10;
const PI = 3.1416; // const is block scope and cannot be reassigned

console.log('Subtitle:', subtitle);
console.log('PI:', PI);


let isMen = true;
console.log('Is men:', isMen);


if (isMen) {
    console.log('Is men');
} else {
    console.log('Is not men');
}

isMen ? console.log('Is men') : console.log('Is not men');

let genre = 'Homosexual';

switch (genre) {
    case 'Male':
        console.log('Is male');
        break;
    case 'Female':
        console.log('Is female');
        break;
    case 'Homosexual':
        console.log('Is homosexual');
        break;
    case 'Therian':
        console.log('Is therian');
        break;
    default:
        console.log('Other');
        break;
}
// Bucles

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

