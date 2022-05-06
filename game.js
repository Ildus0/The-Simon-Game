"use strict"
const btnColor = ["green", "red", "yellow", "blue"];
var numRandom;
var randomChousenColor;
var gamePattern = [];
var userClickedPattern = [];


function nextSequesnce() {
    numRandom = Math.floor(Math.random() * 4);
    console.log(numRandom);
    randomChousenColor = btnColor[numRandom];
    console.log(randomChousenColor);
    gamePattern.push(randomChousenColor);
    console.log(gamePattern);
   console.log($('.btn')[numRandom]) ;
   $("#" + randomChousenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   var audio = new Audio("sounds/" + randomChousenColor + ".mp3");
   audio.play();
   
 }
  

$(".btn").click(function (y) {
        var userChosenColor = y.target.id;
        userClickedPattern.push(userChosenColor);
        console.log(userClickedPattern);
        $("#" + userChosenColor).fadeOut(100).fadeIn(100);
        var audioR = new Audio("sounds/" + userChosenColor + ".mp3");
   audioR.play();
});

$(document).keypress(nextSequesnce);



