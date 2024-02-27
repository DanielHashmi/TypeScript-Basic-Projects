let guest4: string[] = ['Omar', 'Amir', 'Fatima'];

guest4.push('Ali')
guest4.unshift('Sarah')
putBetween(guest4, 'Hasnain')

for (let i: number = 0; i < guest4.length; i++) {
    console.log(`Sorry my dear friend ${guest4[i]} i only have space for two people.\n`)
}

function putBetween(array: string[], text: string): string[] {
    guest4 = [];
    array.forEach((e) => {
        if (guest4.length == Math.floor(array.length / 2)) {
            guest4.push(text, array[Math.floor(array.length / 2)])
        } else {
            guest4.push(e)
        }
    })
    return guest4
}

while (guest4.length != 2) {
    let removedGuest4s: string | undefined = guest4.pop()
    console.log(`Sorry i can't invite you my friend ${removedGuest4s}\n`)
}

console.log(`But ${guest4[0]} you are still invited`)
console.log(`But ${guest4[1]} you are still invited`)

guest4 = [];
console.log(guest4)