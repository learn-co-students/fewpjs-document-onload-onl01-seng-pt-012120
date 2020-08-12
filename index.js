// Your code goes here

document.addEventListener("DOMContentLoaded", function(){
  let element = document.querySelector("p#text");
  element.innerHTML = "This is really cool!";

});

console.log("This console.log() fires when index.js laods - before DOMContentLoaded is triggered");