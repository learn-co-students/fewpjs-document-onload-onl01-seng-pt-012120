// Your code goes here
"JavaScript is so cool. It lets me add text to my page programmatically."

"This is really cool!"

document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  let pText = document.getElementById('text');
  pText.innerHTML = "This is really cool!"
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);