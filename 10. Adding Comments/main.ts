// Stripping Names

let myName4: string = 'D\ta\nn\ti\ne\tl'; // Name Variable

console.log(myName4) // Before

console.log('==============') // Line to Identify the difference

console.log(strip(myName4)) // After

// Declaring a strip function in Javascript
function strip(text: string) {
    return text.replaceAll('\n', '').replaceAll('\t', '')
}