let x = 10
console.log('out', x)

function f1 () {
    let x = 20
    console.log('fun', x)
    if (true) {
        let x = 30
        console.log('if', x)
    }
    console.log('fun', x)
}
f1()

console.log('out', x)

