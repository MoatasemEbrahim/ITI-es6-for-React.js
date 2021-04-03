const obj = {
    userName: 'Me',
    age: 26,
    track: 'GIS',
    height:180
}

const {height} = obj

const {userName,track} = obj;

const {age:ageInYears} = obj

console.log('userName',userName)
console.log('age',ageInYears)
console.log('track',track)
console.log('height',height)