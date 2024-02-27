"use strict";
let magicians1 = ['Daniel', 'Aysha', 'Oz', 'KungFuPanda', 'HarryPotter', 'Dambaldore'];
function show_magicians1(array) {
    array.forEach(magician => {
        console.log(magician);
    });
}
function make_great3(array) {
    magicians1 = [];
    array.forEach((magician) => {
        magicians1.push(magician.replace(magician, `The Great ${magician}`));
    });
    return magicians1;
}
make_great3(magicians1);
show_magicians1(magicians1);
