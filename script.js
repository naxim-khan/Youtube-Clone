var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container= document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}



document.addEventListener("DOMContentLoaded", function() {
    const profileClickButton = document.querySelector(".user-icon");

    profileClickButton.addEventListener("click", function() {
        // Toggle the dark-mode class on the body element
        document.body.classList.toggle("dark-mode");
    });
});