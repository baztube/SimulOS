const homeButton = document.getElementById("home");
const homeDiv = document.getElementById("navigation");
homeButton.onclick = function () {
  let visible = homeDiv.style.visibility
if(visible === "visible"){
  homeDiv.style.visibility = "hidden";
} else{
  homeDiv.style.visibility = "visible";
}}

// Add a mousedown event listener to the document body
document.body.addEventListener("mousedown", function(event) {
    // Check if the clicked element is outside the specified area (e.g., not a child of homeDiv)
    if (!homeDiv.contains(event.target)) {
        // Clicked outside the specified area, hide homeDiv
        homeDiv.style.visibility = "hidden";
    }
});