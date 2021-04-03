// regular function declaration
function sayHiITIainsRegularFunction() {
    console.log(this)
    return 'Hi, ITIains!'
}

const sayHiITIainsRegularFunction2 = function () {
    return 'Hi, ITIains!'
}
  
    
// arrow function declaration
const sayHiITIainsArrowFunction = () => {
    return 'Hi, ITIains'
}

const sayHiITIainsArrowFunction2 = () => 'Hi, ITIains'

// const double = (x) => {
//     return x * 2;
// }
// short arrow function
const double = x => x * 2




// ---------------------------------- This and lexical scope ----------------------------------

// var obj = {}, fives = []
// obj.fives = []
// obj.nums = [1,2,5,6,10]
// obj.getFives = function(){
// this.nums.forEach( function(v){ if(v%5 == 0) this.fives.push(v) })
// }
// obj.getFivesByArrow = function(){
// this.nums.forEach((v) => { if(v%5 == 0) this.fives.push(v) })
// }
// obj.getFives()
// console.log("Window",fives)
// console.log("obj",obj.fives)
// obj.getFivesByArrow()
// console.log("Window",fives)
// console.log("obj",obj.fives)
