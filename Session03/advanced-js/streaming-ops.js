// map, reduce, filter

let arr = [4,2,7,1,5,9,3,6,5,4,0]

// arr.forEach((v, i, o) => {
//   console.log(v)
// })

let arr2 = arr.map(Math.sqrt)

let arr3 = arr.filter((v, i, o) => {
    console.log(i)
    return (v > i)
})

let x = arr.reduce((prev, curr, i, o) => {
    console.log('prev', prev, '| curr', curr, '| i', i)
    return prev + curr
})