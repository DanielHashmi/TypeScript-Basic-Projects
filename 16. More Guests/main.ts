let guest3: string[] = ['Omar', 'Amir', 'Fatima'];

guest3.push('Ali')
guest3.unshift('Sarah')
putBetween(guest3, 'Hasnain')

for (let i: number = 0; i < guest3.length; i++) {
    console.log(`You are invited my friend ${guest3[i]}. But! Osman Can't Come.\n`)
}

function putBetween(array: string[], text: string): string[] {
    guest3 = [];
    array.forEach((e) => {
        if (guest3.length == Math.floor(array.length / 2)) {
            guest3.push(text, array[Math.floor(array.length / 2)])
        } else {
            guest3.push(e)
        }
    })
    return guest3
}
