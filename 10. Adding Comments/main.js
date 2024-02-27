"use strict";
// Stripping Names
let myName4 = 'D\ta\nn\ti\ne\tl'; // Name Variable
console.log(myName4); // Before
console.log('=============='); // Line to Identify the difference
console.log(strip(myName4)); // After
// Declaring a strip function in Javascript
function strip(text) {
    return text.replaceAll('\n', '').replaceAll('\t', '');
}
