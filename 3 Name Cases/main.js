"use strict";
let myName2 = 'daniel';
console.log(myName2.toUpperCase());
console.log(myName2.toLowerCase());
console.log(toTitleCase(myName2));
function toTitleCase(text) {
    return text[0].toUpperCase().concat(text.slice(1, text.length));
}
