"use strict";
const btnColor = ["green", "red", "yellow", "blue"];
var numRandom;
var randomChousenColor;
var gamePattern = [];


// $(document).on("load", nextSequesnce());

function nextSequesnce() {
    numRandom = Math.floor(Math.random() * 4);
    console.log(numRandom);
    randomChousenColor = btnColor[numRandom];
    console.log(randomChousenColor);
    gamePattern.push(randomChousenColor);
    console.log(gamePattern);
   console.log($('.btn')[numRandom]) ;
   $("#" + randomChousenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   
 }
  
  


// $(".btn").click(function (y) {
//         arrColorsForCompare.push(y.target.id);
//     var count = arrColorsForCompare.length - 1;
// if (arrGenColors)
//     console.log("arrColorsForCompare is " + arrColorsForCompare);
//     console.log('btn pressed ' + count + " times");

//     for (let i = 0; i <= count; i++) {
//         if (arrGenColors[i] === arrColorsForCompare[i]) {
//             genRandomColor();
//             arrColorsForCompare =[];
//         }

//     }
// });



