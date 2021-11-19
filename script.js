// replaces text in h2 with id count-el to 5 from 0
// document.getElementById("count-el").innerText = 5;

let countEL = document.getElementById("count-el");
console.log(countEL);

//counter for tracking passengers
// initialize as 0
let count = 0;
console.log("Contents of count var: ", count);

// listen for clicks on increment button - lives in html

// when button is clicked, increment count
function increment(){
    console.log("Button click!");
    count = count+1;
    // innertext references text inside tags
    // change count-el in html
    countEL.innerText = count;
    console.log(count);
}













// lesson scratch pad area

// let lapsCompleted = 0;

// function lapIncrement(){
//     lapsCompleted = lapsCompleted +1;
//     console.log(lapsCompleted);
// }

// lapIncrement();
// lapIncrement();
// lapIncrement();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLapTime(){
// let laptimetotal = lap1 + lap2 + lap3;
// console.log(laptimetotal);
// }

// totalLapTime();

// let bonusPoints = 50;
// bonusPoints += 50;
// console.log("bonusPoints to 100: ", bonusPoints);
// bonusPoints -= 75;
// console.log("bonusPoints to 25: ", bonusPoints);
// bonusPoints += 45;
// console.log("bonusPoints to 70: ", bonusPoints);

// let myAge = 40;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);