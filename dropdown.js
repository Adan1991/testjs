document.addEventListener("DOMContentLoaded", function() {
    var clickable = document.getElementById("toggleText");
    var dropdown = document.getElementById("dropdownContent");

    clickable.addEventListener("click", function() {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
});
