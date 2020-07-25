// Your code goes here
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
//   });

//   console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );

// should change the text on the page when DOM content has loaded
document.addEventListener("DOMContentLoaded", function() {
    var element = document.getElementById("text");
element.innerHTML = "This is really cool!"; 
  });



