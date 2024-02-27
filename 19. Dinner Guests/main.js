"use strict";
let guest5 = ['Omar', 'Amir', 'Fatima'];
guest5.push('Ali');
guest5.unshift('Sarah');
putBetween(guest5, 'Hasnain');
for (let i = 0; i < guest5.length; i++) {
    console.log(`You are invited my friend ${guest5[i]}. But! Osman Can't Come.\n`);
}
function putBetween(array, text) {
    guest5 = [];
    array.forEach((e) => {
        if (guest5.length == Math.floor(array.length / 2)) {
            guest5.push(text, array[Math.floor(array.length / 2)]);
        }
        else {
            guest5.push(e);
        }
    });
    return guest5;
}
console.log(guest5.length);
