let myName3: string = 'D\ta\nn\ti\ne\tl';

console.log(myName3)

console.log('==============')

console.log(strip(myName3))

function strip(text: string) {
    return text.replaceAll('\n', '').replaceAll('\t', '')
}