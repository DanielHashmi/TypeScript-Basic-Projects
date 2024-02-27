"use strict";
let myName3 = 'D\ta\nn\ti\ne\tl';
console.log(myName3);
console.log('==============');
console.log(strip(myName3));
function strip(text) {
    return text.replaceAll('\n', '').replaceAll('\t', '');
}
