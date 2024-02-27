"use strict";
let userNames1 = ['Admin', 'Daniel', 'Osman'];
for (let i = 0; i < userNames1.length; i++) {
    if (userNames1[i] === 'Admin') {
        console.log('Hello Admin, would you like to see the status report?');
    }
    else {
        console.log('Welcome ' + userNames1[i]);
    }
}
if (userNames1.length == 0) {
    console.log('We need to find some users!');
}
