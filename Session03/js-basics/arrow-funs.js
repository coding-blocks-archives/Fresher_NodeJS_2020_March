
let sqr1 = (a) => {
    console.log(this) //lexical
    return a * a
} 

let sqr2 = function (a) {
    console.log(this)
    return a * a
}

let obj = {
    x: sqr1,
    y: sqr2
}