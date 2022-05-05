'use strict';
const btnColor = ['green', 'red', 'yellow', 'blue'];
let arrGenColors = [];
let arrColorsForCompare = [];

$('.btn').click(function (y) {
    // arrForCompare.push($(".btn").attr('id'));
    console.log(y.target.id);
arrColorsForCompare.push(y.target.id);
console.log(arrColorsForCompare);
});

function genNum() {
    let num = Math.floor(Math.random() * 4);
   console.log(num);
    if (num ===  0) {
        arrGenColors.push("green");
    }   if (num ===1) {
            arrGenColors.push("red");
        } if (num === 2) {
                arrGenColors.push("yellow");
            } if (num===3) {
                arrGenColors.push("blue");
            }
            console.log(arrGenColors);
            //adn need code to show visual next button
        }

$(document).keypress(function () {
    genNum();
});
