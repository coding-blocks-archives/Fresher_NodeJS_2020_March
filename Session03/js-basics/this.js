
console.log(this)

function x () {
    console.log(this)
}

x()

let o = {
    a: 10,
    b: '234',
    c: x,
    d: {
        p: 88,
        q: true,
        r: x
    }
}