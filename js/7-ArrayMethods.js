// these array methods run on arrays and return a new array,
//they accept a function (callback function) as parameter and run this function on every element in the array

const array = [1,2,4,65,3,2,12,22]


// ----- .map -------> return a new array with the same length (used to manipulate items in the array)
const arrayOfNumbersAndTypes = array.map(number => ({number,type: number%2 === 0 ? 'even':'odd'}))
// const arrayOfNumbersAndTypes = array.map(
//     function (number){
//         return {
//             number:number,
//             type: number%2 === 0 ? 'even':'odd'
//         }
//     }
// )
console.log('arrayOfNumbersAndTypes',arrayOfNumbersAndTypes)


// // ----- filter -------> return a new array with elements that satisfy a condition in the callback function
// const oddNumbers = arrayOfNumbersAndTypes.filter(obj => obj.type === 'odd')
// console.log('oddNumbers',oddNumbers)


// // ----- find -------> return the the first element in the array that satisfy a condition in the callback function or undefined
// const firstElementEqualTwo = arrayOfNumbersAndTypes.find(obj => obj.number === 2)
// console.log('firstElementEqualTwo',firstElementEqualTwo)


// // ----- reduce -------> return the accumulator after running on all the array element
// const someOfArrayElement = arrayOfNumbersAndTypes.reduce((accumulator,obj)=> accumulator+obj.number , 0)

// [
    // 0: Object { number: 1, type: "odd" }
    // 1: Object { number: 2, type: "even" }
    // 2: Object { number: 4, type: "even" }
    // 3: Object { number: 65, type: "odd" }
// ]
const someOfArrayElement = arrayOfNumbersAndTypes.reduce(
    function(accumulator,obj){
        return accumulator + obj.number;
    },
    0
)

// first loop
// acc = 0 , num = 1
//  0 + 1 = 1

//  second loop
//  acc = 1 , num = 2
//  1 + 2 = 3

//  third loop
//  acc = 3 , num = 4
//  3 + 4 = 7

//  forth loop
//  acc = 7 , num = 65
//  7 + 65 = 72


console.log('someOfArrayElement',someOfArrayElement)


