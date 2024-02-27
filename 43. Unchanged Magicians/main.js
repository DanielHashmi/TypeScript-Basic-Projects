"use strict";
let magicians2 = ['Daniel', 'Aysha', 'Oz', 'KungFuPanda', 'HarryPotter', 'Dambaldore'];
function show_magicians(array) {
    array.forEach(magician => {
        console.log(magician);
    });
}
function make_great(array) {
    let magicians2 = [];
    array.forEach((magician) => {
        magicians2.push(magician.replace(magician, `The Great ${magician}`));
    });
    return magicians2;
}
let modifiedArr = make_great(magicians2);
console.log(modifiedArr);
show_magicians(magicians2);
