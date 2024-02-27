function carInfo(manufacturer: string, model: string, ...args: {}[]) {

    let obj = {
        Manufacturer: manufacturer,
        Model: model
    }

    args.forEach(object => {
        if (typeof object === 'object') {
            Object.assign(obj, object)
        }
    });

    return obj
}
console.log(carInfo('BMW', 'I8', { Color: 'Red', NumberPlate: 'ZKA-884' }))

// Just converted my Javascript 45 assignments to Typescript Thanks! Daniel Hashmi.