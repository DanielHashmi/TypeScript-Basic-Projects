let magicians2: string[] = ['Daniel', 'Aysha', 'Oz', 'KungFuPanda', 'HarryPotter', 'Dambaldore']

function show_magicians(array: string[]): void {
    array.forEach(magician => {
        console.log(magician)
    });
}

function make_great(array: string[]): string[] {
    let magicians2: string[] = [];
    array.forEach((magician) => {
        magicians2.push(magician.replace(magician, `The Great ${magician}`))
    })
    return magicians2
}

let modifiedArr: string[] = make_great(magicians2)

console.log(modifiedArr)
show_magicians(magicians2)

