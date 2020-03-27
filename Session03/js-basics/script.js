console.log('hello')
console.log(x) // var hoisting

var x = 10
let y = 11
const z = 12


// datatypes

console.log(10, typeof 10)
console.log('asdasd', typeof 'asdasd')
console.log(true, typeof true)
console.log([1,2,3], typeof [1,2,3])

// arrays
let arr = [1,2,3, 'a', 'b', 'c', true, false, [4,5,6]]

// objects
let obj = {
    a: 10,
    b: 'sfsfh',
    c: true,
    'd': 32,
    'x y': 245,
    p: [23,524,524,5],
    q: {
        dafd: 'adgsdg',
        fssf: 245452
    }
}
obj['x y']


// functions 

function f1 (a) {
    console.log('you sent me', a)
    return 2020
}

console.log(typeof f1)

let f2 = f1() // typeof f2 ?
let f3 = f1 // typeof f3 ?
console.log('f2', typeof f2)
console.log('f3', typeof f3)

let f4 = function () {
    console.log('running f4')
    return 1
}


