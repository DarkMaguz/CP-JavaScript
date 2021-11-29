console.log("main.js loaded")

var clickCounter = 0

function cookieClicked() {
  var counter = document.getElementById("counter")
  clickCounter++
  counter.innerText = clickCounter
  if (clickCounter > 15) {
    var cookieShop = document.getElementById("cookieShop")
    cookieShop.innerHTML = ""
  }
}
