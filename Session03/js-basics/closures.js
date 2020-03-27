
function createCounter(init, delta) {
    let x = init
    function count() {
        x+= delta
        console.log('counter', x)
    }
    return count
}

let c1 = createCounter(10, 4)
let c2 = createCounter(4, 1)

c1()
c1()
c1()
c2()
c2()
c2()
