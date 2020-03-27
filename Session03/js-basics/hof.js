function createGreeter(greeting) {
  function greet(fetchName) {
    if (typeof fetchName === 'function') {
        console.log(greeting, fetchName())
    }
    else {
        console.log(greeting, 'Guest')
    }
  }

  return greet
}

let g1 = createGreeter('Good Morning')
let g2 = createGreeter('Good Evening')

function getTeacherName() {
  return 'Arnav'
}

function getStudentName() {
  return 'John'
}

g1('asdsad')
g2(getStudentName)
