"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColors = "green";
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
// Version 1 of the program 
if (alienColors === "green") {
    console.log("version 1: Player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("Player earned 15 points.");
}
else {
    console.log("Please select right color");
}
// Version 2 of the program
alienColors = "yellow";
if (alienColors === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("version 2: Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("Player earned 15 points.");
}
else {
    console.log("Please select right color");
}
// Version 3 of the program
alienColors = "red";
if (alienColors === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("version 3: Player earned 15 points.");
}
else {
    console.log("Please select right color");
}
