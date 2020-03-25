const inpNewTask = document.getElementById('inpNewTask')
const ulTaskList = document.getElementById('ulTaskList')

function addTask() {
  const taskName = inpNewTask.value
  console.log('Going to add task = ' + taskName)
  // bad for performance approach
  // ulTaskList.innerHTML += '<li>' + taskName + '</li>'

  // better approach
  const newItem = document.createElement('li')
  newItem.textContent = taskName
  ulTaskList.appendChild(newItem)
}


function populateList() {
  let start = Date.now()
  for (let i = 0; i < 1000; i++) {
    const newItem = document.createElement('li')
    newItem.textContent = i
    ulTaskList.appendChild(newItem)
  }
  console.log ('time taken = ' + (Date.now() - start))
}
