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
,"https://scontent-ber1-1.cdninstagram.com/vp/d6add417c665c79c25fd6b9f4d937282/5CFC2089/t51.2885-15/e35/37683340_342059159667592_1629775252282146816_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com"
,"https://scontent-ber1-1.cdninstagram.com/vp/c986252d3f79c83f6137a47a3b794084/5CFFF9FB/t51.2885-15/e35/50891611_2074639592829043_2608738899017278561_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com"
,"https://scontent-ber1-1.cdninstagram.com/vp/f26e0f076640dd057fd663bcddf7cbe2/5CF0C0BF/t51.2885-15/sh0.08/e35/p640x640/45468993_1933936773568642_2039005752388160064_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com"
,"https://scontent-ber1-1.cdninstagram.com/vp/eb3e11e4232919e298f3bd4c18158ab2/5CE2851B/t51.2885-15/sh0.08/e35/p750x750/37588366_446715685812660_1745026546436931584_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com"
,"https://scontent-ber1-1.cdninstagram.com/vp/25d0b2a18b699c6bb9e28fd47e73917a/5D01D45E/t51.2885-15/e35/43119092_341563206648190_6797032799640095984_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com"
,"https://scontent-ber1-1.cdninstagram.com/vp/b83f8a80ec9c440edfe606d23dab96cb/5CFAB0A2/t51.2885-15/sh0.08/e35/s750x750/41949764_2235173953405967_7898429226453366260_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com"
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