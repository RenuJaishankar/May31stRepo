function myFunction() {
let inches = prompt("input your height in inches")
let cm = 2.54 * inches
console.log(`${inches} inches  is equal to ${cm} in centimeters`)
document.getElementById("myId").innerHTML= `${inches} inches is equal to ${cm} in centimeters`

}