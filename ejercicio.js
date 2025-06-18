
let init = 0;
let end = 20;
const serie = () => {
    let array = [init, init + 1]
    
    while (array.at(-1) <= end){
        let number = array.at(-2) + array.at(-1)
        if (number >= end) break
        array.push(number)
    }
    return array
}
console.log(serie())

// Map 
const mapFibonacci = () => {
    const map = new Map();
    map.set(1, init)
    map.set(2, init  + 1)
    let i = 3
    sum = map.get(i-2) + map.get(i-1)
    while (sum <= end){
        map.set(i, sum )
        sum = map.get(i-2) + map.get(i-1)
        i++
    }
    return map
}

console.log(mapFibonacci())


// Set
const setFibonacci = () => {
    const set = new Set()
    set.add(init)
    set.add(init + 1)
    var arraySet = Array.from(set)
    for (let i = init; i <= end; i++) {
        let sum = arraySet.at(-2) + arraySet.at(-1)
        if (sum >= end) break
        arraySet.push(sum) 
    }
    return arraySet
}
const newArray = new Set(setFibonacci())
console.log(newArray)




// // const data = [
// //     {
// //         id : 1,
// //         title: 'Iron man',
// //         year : 2008
// //     },
// //     {
// //         id : 2,
// //         title: 'Spiderman Homecoming',
// //         year : 2017
// //     },
// //     {
// //         id : 3,
// //         title: 'Avengers: EndGame',
// //         year : 2019
// //     }
    
// // ]
// const data = []
// // const getData = () => {
// //     return data
// // }
// const getData = () => {
//     return new Promise((resolve, reject) => {
//         if (data.length === 0){
//             reject( new Error ('No hay datos'))
//         }
//         setTimeout(() =>{
//             resolve(data)
//         },5000)
//     })
// }
// // getData().then((data) => console.log(data))
// async function fetchingData (){
//     try {
//         const dataFetch = await getData()
//         console.log(dataFetch)
//     }catch (e){
//         console.log(e.message)
//     }
// }
// fetchingData()