let userNames: string[] = ['Daniel', 'Osman', 'Fatima', 'Amir', 'Admin', 'Hasnain'];

for (let i: number = 0; i < userNames.length; i++) {
    if (userNames[i] === 'Admin') {
        console.log('Hello Admin, would you like to see the status report?')
    } else {
        console.log('Welcome ' + userNames[i])
    }
}