var randomnumber1 = Math.random();
randomnumber1 = Math.floor(randomnumber1 * 6) + 1;
// console.log(randomnumber1);

var randomImage = "dice" + randomnumber1 + ".png";

// var randomImageSourceFile = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage);

var randomnumber2 = Math.floor(Math.random() * 6 + 1);
var randomImage = "dice" + randomnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h3").innerHTML = "🚩PLAYER  1 WINS 🥳";
} else if (randomnumber1 < randomnumber2) {
  document.querySelector("h3").innerHTML = "🚩🚩PLAYER  2 WINS 🥳";
} else {
  document.querySelector("h3").innerHTML = "😂😂OHH NO!! IT'S A DRAW";
}
