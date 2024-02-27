let myName2: string = 'daniel';

console.log(myName2.toUpperCase())
console.log(myName2.toLowerCase())
console.log(toTitleCase(myName2))

function toTitleCase(text: string) {
    return text[0].toUpperCase().concat(text.slice(1, text.length))
}
