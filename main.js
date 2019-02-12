// source: https://github.com/mc100s/wecode-berlin

console.log("main.js file is loaded!");

// Example of a function
function f(x) {
  return x * 10;
}
console.log(f(4)); // => 40

// Define the function randomElement
function randomElement(a) {
  var randomIndex = Math.floor(Math.random()*a.length) // between 0 and the lenght of the array -1
  return a[randomIndex];
}

var arr = ['a','b','c','d','e','f','g','h','i','j','k'];


// Call the function randomElement
console.log(randomElement(arr)); // => 'c'
console.log(randomElement(arr)); // => 'e'
console.log(randomElement(arr)); // => 'c'

// Source of the jokes: http://www.icndb.com/the-jokes-2/
var jokes = [
  "When Chuck Norris goes to donate blood, he declines the syringe, and instead requests a hand gun and a bucket.",
  "Chuck Norris can divide by zero.",
  "It takes Chuck Norris 20 minutes to watch 60 minutes."
];

document.querySelector('#yes').onclick = function () {
  // TODO: write the code of the function
  // You will have to use: document.querySelector(mySelector).innerHTML = "My new HTML"
  console.log("YES was clicked");
  document.querySelector('#answer').innerHTML = randomElement(jokes);
}

document.querySelector('#no').onclick = function () {
  // TODO: write the code of the function
  // You will have to use: document.querySelector(mySelector).innerHTML = "My new HTML"
  console.log("NO was clicked");
  document.querySelector('#answer').innerHTML = "Sorry to hear that!";
}