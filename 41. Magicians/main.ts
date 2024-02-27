let magicians: string[] = ['Daniel', 'Aysha', 'Oz', 'KungFuPanda', 'HarryPotter', 'Dambaldore']

function show_magicians(array: string[]) {
    array.forEach(magician => {
        console.log(magician)
    });
}

show_magicians(magicians)