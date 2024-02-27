let magicians1: string[] = ['Daniel', 'Aysha', 'Oz', 'KungFuPanda', 'HarryPotter', 'Dambaldore']

function show_magicians1(array: string[]): void {
    array.forEach(magician => {
        console.log(magician)
    });
}

function make_great3(array: string[]): string[] {
    magicians1 = [];
    array.forEach((magician) => {
        magicians1.push(magician.replace(magician, `The Great ${magician}`))
    })
    return magicians1
}
make_great3(magicians1)
show_magicians1(magicians1)

