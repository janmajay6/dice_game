var num1 = Math.floor(Math.random()*6)+1;
var randomImg1 = "images/dice"+num1+".png";
var changeImg1 = document.querySelectorAll("img")[0].setAttribute("src",randomImg1);

var num2 = Math.floor(Math.random()*6)+1;
var randomImg2 = "images/dice"+num2+".png";
var changeImg2 = document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

if (num1>num2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if (num2>num1) {
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
