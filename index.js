//document.getElementById("count").innerText = 5
//let count = 0;

/*let firstBatch = 5
let secondBatch = 6
 let count = firstBatch + secondBatch

 console.log(count);*/

/* let myAge = 20
 let humanDogRatio = 7

 let myDogAge = myAge * humanDogRatio
 console.log(myDogAge);



let bonusPoints = 50
 
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 30
console.log(bonusPoints)*/
 
/*
function increment() {
console.log("the button was clicked")
}

function countdown(){
  console.log(5)
  console.log(4)
  console.log(3)
  console.log(2)
  console.log(1)
}
countdown()
countdown()

let lap1 = 34
let lap2= 33
let lap3 =36
function totalLaps() {
  let totals = lap1 + lap2 + lap3
  console.log(totals)
}
totalLaps()

let lapsCompleted = 0
function incrementLap() {
  lapsCompleted += 1
  
}
incrementLap()
incrementLap()
incrementLap()
incrementLap()
console.log(lapsCompleted)

function increment(){
  console.log('hey')
}
  */


let countEl = document.getElementById("count-el")



let count = 0

function increment(){
  count += 1
  console.log(count)
  //countEl.innerText = count
  document.getElementById("count-el").textContent = count
}

function save(){
  console.log(count)
}

let welcomeEl = document.getElementById("welcome-el")
let name = "victor busami"
let greeting = "welcome back "
welcomeEl.innerText = greeting + name
welcomeEl.innerText += "😊"

let saveEl = document.getElementById("save-el")
function save(){
  let countStr = count + " - "
  saveEl.textContent += countStr
  console.log(count)
  countEl.textContent = 0
  count = 0
}

