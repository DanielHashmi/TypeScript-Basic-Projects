let current_users: string[] = ['daniel', 'osman', 'fatima', 'omar', 'ayasha'];
let new_users: string[] = ['DANIEL', 'Ahmad', 'Ayasha', 'Husain', 'Ali', 'Sameer'];


for (let i:number = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase())) {
        console.log(`The username ${new_users[i]} is already taken, Try Another\n`)
    } else {
        console.log(`The username ${new_users[i]} is Available\n`)
    }
}