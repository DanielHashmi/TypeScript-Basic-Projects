let favPlaces: string[] = ['Turkey', 'Paris', 'London', 'New York', 'Canada', 'Dubai', 'Thailand'];


let sortedArr: string[] = favPlaces.slice().sort()

console.log(favPlaces)
console.log(sortedArr)

let reverseArr: string[] = sortedArr.slice().reverse()

console.log(sortedArr)
console.log(reverseArr)

favPlaces.reverse()
console.log(favPlaces)
favPlaces.reverse()
console.log(favPlaces)

favPlaces.sort()
console.log(favPlaces)
favPlaces.sort().reverse()
console.log(favPlaces)