let submit = document.getElementById('submit')

submit.onclick = function() {
  function reqListener() {
    console.log(JSON.parse(this.responseText))
  }

  var req = new XMLHttpRequest()
  req.addEventListener('load', reqListener)
  req.open('GET', '/todos')
  req.send()
}
