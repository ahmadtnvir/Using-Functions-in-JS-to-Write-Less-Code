// function increment() {
//     console.log("The button was clicked")
// }

// // *** Using Functions to Write Less Code ***

// function countDown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// Setting up the the race 🏎 🏎 🏎
// countDown()

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎
// countDown()

// // *** Write a function that logs the sum ***

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// Create a function that logs out the sum of all the lap times
// function totalLapTime(){
//     let lapTime = lap1 + lap2 + lap3
//     console.log(lapTime)
// }

// totalLapTime()

// // *** Write a functions that increments ***

// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function increaseLap() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }
// increaseLap()
// increaseLap()
// increaseLap()

// console.log(lapsCompleted)

// // *** Increments on click ***

// intialize the count as 0
let count = 0

// listen for clicks on the increment button
function increment(){
    console.log("The button was clicked.")
}

// increment the count variable when the button is clicked (log it out)
function increment(){
    count = count +1
    console.log(count)
}
increment()

// change the count-el in the HTML to reflect the new count
function increment(){
    count = count + 1
    document.getElementById("count-el").innerHTML = count
}
