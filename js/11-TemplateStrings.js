const userName = 'Mohamed'
const country = 'Egypt'

const string = 'hi ' + userName + ' from ' + country

const string2 = `hi ${userName} from ${country}`

console.log(string)
console.log(string2)

const stringBasedOnCondition = `hi ${userName} from ${country === 'Egypt' ? 'Egypt' : 'Outside Egypt'}`
console.log(stringBasedOnCondition)
