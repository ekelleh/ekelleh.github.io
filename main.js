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

var pictures = [
  "https://scontent-ber1-1.cdninstagram.com/vp/273367fdfca418a2a54455238e7e57b6/5CE1F7DF/t51.2885-15/e35/13249858_1127705917268579_993210963_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com"
,"https://scontent-ber1-1.cdninstagram.com/vp/ce233db2b140030636605575c2afae38/5CDA27D5/t51.2885-15/e35/13259640_1718743691730490_1337452270_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com"
,"https://scontent-ber1-1.cdninstagram.com/vp/a471bab25bc90d8106bd8fbd548aa2fe/5CE63574/t51.2885-15/e35/13398629_1590015311295921_78117602_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com"
,"https://scontent-ber1-1.cdninstagram.com/vp/21d96c94bd112bc9de8a14fbc56c8d62/5CE4C085/t51.2885-15/e35/13573435_255008804871262_2036451330_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com"
,"https://scontent-ber1-1.cdninstagram.com/vp/4e6c0dcb2b07654424f0d28a3ea68215/5D00946D/t51.2885-15/sh0.08/e35/p750x750/14733214_680095168813403_8144855918618607616_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com"
,"https://scontent-ber1-1.cdninstagram.com/vp/412ac68a624a5b0339259d31b592ebfd/5CFD259A/t51.2885-15/e35/22636907_185593835322290_9111886922212442112_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com"
, "https://scontent-ber1-1.cdninstagram.com/vp/1bce154485ad119ec579fbfe049e426e/5D016D18/t51.2885-15/sh0.08/e35/p750x750/42437707_254575098586876_7797875796313853346_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com"
];

document.querySelector('#yes').onclick = function () {
  console.log("YES was clicked");
  document.querySelector('#answer').src = randomElement(pictures);
}

document.querySelector('#no').onclick = function () {
  // TODO: write the code of the function
  // You will have to use: document.querySelector(mySelector).innerHTML = "My new HTML"
  console.log("NO was clicked");
  document.querySelector('#answer').src = "";
  document.querySelector('#answer').innerHTML = "Sorry to hear that!";
}