
let init = 5;
let end = 20;
const serie = () => {
    let array = [0,1]
    
    while (array.at(-1) <= end){
        let number = array.at(-2) + array.at(-1)
        // console.log(number) 
        array.push(number)
    }
    return array.filter(n => n >= init && n <= end)
}
console.log(serie())

// Map 
const mapFibonacci = () => {
    const map = new Map();
    map.set(1, init)
    map.set(2, init  + 1)
    for (let i = 3; i <= end ; i++){
        sum = map.get(i-2) + map.get(i-1)
        map.set(i, sum )
    }
    return map
}

console.log(mapFibonacci())


// Set
const setFibonacci = () => {
    const set = new Set()
    set.add(0)
    set.add(1)
    let i = 0
    var arraySet = Array.from(set)
    while(true) {
        i++
        var sum = arraySet.at(-2) + arraySet.at(-1)
        if (sum >= end) break
        arraySet.push(sum) 
    }
    return arraySet
}
const newArray = new Set(setFibonacci())
console.log(newArray)




