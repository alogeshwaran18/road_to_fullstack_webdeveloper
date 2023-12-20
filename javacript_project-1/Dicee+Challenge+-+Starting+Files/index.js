
// creating random variable for number to get from 1-6

var randomNumber1 = Math.floor(Math.random()*6)+1

var dice1="/dice"+randomNumber1+".png";

var image1="./images"+dice1;

document.querySelectorAll("img")[0].setAttribute("src",image1);

//same login for another dice
var randomNumber2 = Math.floor(Math.random()*6)+1

var dice2="/dice"+randomNumber2+".png";

var image2="./images"+dice2;

document.querySelectorAll("img")[1].setAttribute("src",image2);

// logic for predicting winner
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins 🚩"
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩"
}else{
    document.querySelector("h1").innerHTML="Draw"
}